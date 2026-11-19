(() => {
  'use strict';

  const TYPE_COLORS = {
    company: '#1e3a5f',
    organization: '#2f6f5e',
    person: '#b4532a',
    product: '#6d4c91',
    business: '#8a6d3b',
  };

  const TYPE_ORDER = [
    { key: 'company', label: '公司 (company)' },
    { key: 'organization', label: '机构 / 实验室 / 基金' },
    { key: 'person', label: '核心人物' },
    { key: 'product', label: 'Plan-C 产品 / 模型' },
    { key: 'business', label: '业务单元' },
  ];

  const CLUSTER_PALETTE = [
    '#2563eb', '#9333ea', '#059669', '#d97706', '#4b5563', '#dc2626', '#0891b2', '#be185d',
  ];

  const SCRIPT_CACHE = new Map();

  function escHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function hexToRgba(hex, alpha) {
    const clean = String(hex || '#4b5563').replace('#', '');
    if (clean.length !== 6) return `rgba(75,85,99,${alpha})`;
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function shortLabel(name) {
    const s = String(name || '');
    const cleaned = s.replace(/\s*\(@[^)]+\)\s*(?:·\s*X账号)?/, '').replace(/\s*·\s*X账号$/, '').trim();
    return cleaned.length > 22 ? cleaned.slice(0, 21) + '…' : cleaned;
  }

  function deterministicOffset(id, scale) {
    let h = 2166136261;
    for (let i = 0; i < id.length; i++) {
      h ^= id.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (((h >>> 0) % 1000) / 1000 - 0.5) * scale;
  }

  function injectScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        s.remove();
        reject(new Error(`Failed to load ${src}`));
      };
      document.head.appendChild(s);
    });
  }

  function loadLibrary(localSrc, globalName, cdnFallback) {
    if (typeof window[globalName] !== 'undefined') return Promise.resolve(window[globalName]);
    if (SCRIPT_CACHE.has(globalName)) return SCRIPT_CACHE.get(globalName);
    const p = injectScript(localSrc)
      .catch(() => (cdnFallback ? injectScript(cdnFallback) : Promise.reject(new Error(`Missing ${localSrc}`))))
      .then(() => {
        if (typeof window[globalName] === 'undefined') {
          throw new Error(`Global ${globalName} unavailable after script load`);
        }
        return window[globalName];
      })
      .catch(err => {
        SCRIPT_CACHE.delete(globalName);
        throw err;
      });
    SCRIPT_CACHE.set(globalName, p);
    return p;
  }

  function mount(hostEl, rawData, opts = {}) {
    if (!hostEl || !rawData || !Array.isArray(rawData.nodes)) {
      return { activate() {}, destroy() {} };
    }

    const assetBase = String(opts.assetBase || 'assets').replace(/\/+$/, '');
    const isPortal = rawData.scope === 'all';
    const nodeById = new Map(rawData.nodes.map(n => [n.id, n]));
    const clusterById = new Map((rawData.clusters || []).map(c => [c.id, c]));
    const clusterColors = new Map(
      (rawData.clusters || []).map((c, idx) => [
        c.id,
        c.id === 'cluster-untagged' ? '#6b7280' : CLUSTER_PALETTE[idx % CLUSTER_PALETTE.length],
      ])
    );

    const state = {
      activeTab: null, // 'g6' | 'echarts'
      g6Layout: isPortal ? 'd3-force' : 'combo',
      echartsSub: 'bubble', // 'bubble' | 'force' | 'stats'
      echartsColorBy: 'cluster',
      entityType: 'all',
      predicate: 'all',
      search: '',
      showEdgeLabels: false,
      showAllLabels: rawData.nodes.length <= 85,
      combosCollapsed: false,
    };

    const presentTypes = TYPE_ORDER.filter(t => rawData.nodes.some(n => n.entity_type === t.key));
    const predNames = new Map((rawData.edges || []).map(e => [e.predicate, e.predicate_label]));

    hostEl.innerHTML = `
      <div class="oviz-shell">
        <div class="oviz-toolbar" data-oviz-toolbar></div>
        <div class="oviz-err" data-oviz-err hidden></div>
        <div class="oviz-workspace">
          <div class="oviz-stage-card">
            <div class="oviz-loading" data-oviz-loading hidden>正在加载可视化引擎...</div>
            <div class="oviz-stage" data-oviz-stage></div>
            <div class="oviz-footer" data-oviz-footer></div>
          </div>
          <aside class="oviz-inspector" data-oviz-inspector></aside>
        </div>
      </div>
    `;

    const toolbarEl = hostEl.querySelector('[data-oviz-toolbar]');
    const errEl = hostEl.querySelector('[data-oviz-err]');
    const loadingEl = hostEl.querySelector('[data-oviz-loading]');
    const stageEl = hostEl.querySelector('[data-oviz-stage]');
    const footerEl = hostEl.querySelector('[data-oviz-footer]');
    const inspEl = hostEl.querySelector('[data-oviz-inspector]');

    let g6Instance = null;
    let ecInstance = null;
    let ecObserver = null;
    let g6Observer = null;
    let renderToken = 0;
    let destroyed = false;

    function showErr(msg) {
      errEl.hidden = false;
      errEl.textContent = msg;
    }
    function clearErr() {
      errEl.hidden = true;
      errEl.textContent = '';
    }

    function teardownG6() {
      if (g6Observer) {
        g6Observer.disconnect();
        g6Observer = null;
      }
      if (g6Instance) {
        try { g6Instance.destroy(); } catch (_) {}
        g6Instance = null;
      }
    }

    function teardownECharts() {
      if (ecObserver) {
        ecObserver.disconnect();
        ecObserver = null;
      }
      if (ecInstance) {
        try { ecInstance.dispose(); } catch (_) {}
        ecInstance = null;
      }
    }

    function openEntityAction(nodeObj) {
      if (!nodeObj) return;
      if (typeof opts.onOpenEntity === 'function') {
        opts.onOpenEntity(nodeObj);
      } else if (nodeObj.url) {
        window.location.href = nodeObj.url;
      }
    }

    function renderInspectorOverview() {
      const hubs = [...rawData.nodes].sort((a, b) => b.degree - a.degree).slice(0, 8);
      inspEl.innerHTML = `
        <div class="oviz-insp-head">
          <strong>节点详情与枢纽榜单</strong>
          <span class="oviz-muted">共 ${rawData.nodes.length} 主体 · ${rawData.edges.length} 边</span>
        </div>
        <div class="oviz-tag-row">
          <span class="oviz-tag">Top 8 核心枢纽</span>
          <span class="oviz-tag">点击画布或卡片查看关联</span>
        </div>
        <div class="oviz-rel-list">
          ${hubs.map(n => `
            <div class="oviz-rel-card" data-oviz-jump="${escHtml(n.id)}">
              <div class="oviz-rel-title">
                <span><span class="oviz-dot" style="background:${TYPE_COLORS[n.entity_type] || '#4b5563'}"></span>${escHtml(n.name)}</span>
                <span class="oviz-muted">度 ${n.degree}</span>
              </div>
              <div class="oviz-rel-sub">${escHtml(n.type_label)} · ${escHtml(n.cluster_name)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    function inspectNode(nodeId) {
      const n = nodeById.get(nodeId);
      if (!n) return;
      const incident = rawData.edges.filter(e => e.source === nodeId || e.target === nodeId);
      const canOpen = Boolean(n.url || n.local_entity_rel);
      inspEl.innerHTML = `
        <div class="oviz-insp-head">
          <strong style="font-size:15px;"><span class="oviz-dot" style="background:${TYPE_COLORS[n.entity_type] || '#4b5563'}"></span>${escHtml(n.name)}</strong>
          ${canOpen ? `<button type="button" class="oviz-btn oviz-btn-accent" data-oviz-open="${escHtml(n.id)}">主体档案 →</button>` : ''}
        </div>
        <div class="oviz-tag-row">
          <span class="oviz-tag">${escHtml(n.type_label)}</span>
          <span class="oviz-tag">${escHtml(n.cluster_name)}</span>
          <span class="oviz-tag">出度 ${n.out_degree} · 入度 ${n.in_degree}</span>
        </div>
        ${n.aliases && n.aliases.length ? `<div class="oviz-muted">别名：${escHtml(n.aliases.join(' / '))}</div>` : ''}
        <div class="oviz-insp-subhead">关联本体边（${incident.length} 条）</div>
        <div class="oviz-rel-list">
          ${incident.map(e => {
            const isOut = e.source === nodeId;
            const otherId = isOut ? e.target : e.source;
            const otherName = isOut ? e.target_name : e.source_name;
            return `
              <div class="oviz-rel-card" data-oviz-jump="${escHtml(otherId)}">
                <div class="oviz-rel-title">
                  <span>${isOut ? '→' : '←'} [${escHtml(e.predicate_label)}] ${escHtml(otherName)}</span>
                  <span class="oviz-tag">${escHtml(e.verification)}${e.status === 'former' ? ' · former' : ''}</span>
                </div>
                <div class="oviz-rel-sub">${escHtml(e.label)}（证据 ${e.evidence_count}）</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    function inspectEdge(edgeId) {
      const e = rawData.edges.find(x => x.id === edgeId);
      if (!e) return;
      inspEl.innerHTML = `
        <div class="oviz-insp-head">
          <strong style="font-size:14.5px;">${escHtml(e.source_name)} → ${escHtml(e.target_name)}</strong>
        </div>
        <div class="oviz-tag-row">
          <span class="oviz-tag">${escHtml(e.predicate_label)} (${escHtml(e.predicate)})</span>
          <span class="oviz-tag">${escHtml(e.verification)}</span>
          <span class="oviz-tag">${escHtml(e.status)}</span>
        </div>
        <div class="oviz-fact-box">${escHtml(e.label)}（归档证据引用：${e.evidence_count} 条）</div>
        <div class="oviz-tag-row">
          <button type="button" class="oviz-pill" data-oviz-jump="${escHtml(e.source)}">源点：${escHtml(e.source_name)}</button>
          <button type="button" class="oviz-pill" data-oviz-jump="${escHtml(e.target)}">终点：${escHtml(e.target_name)}</button>
        </div>
      `;
    }

    function inspectCombo(comboId) {
      const c = clusterById.get(comboId);
      if (!c) return;
      const members = rawData.nodes.filter(n => n.cluster_id === comboId).sort((a, b) => b.degree - a.degree);
      inspEl.innerHTML = `
        <div class="oviz-insp-head">
          <strong style="font-size:14.5px;">${escHtml(c.name)}</strong>
          <span class="oviz-muted">${members.length} 个主体</span>
        </div>
        ${c.lineageType ? `<div class="oviz-tag-row"><span class="oviz-tag">${escHtml(c.lineageType)}</span></div>` : ''}
        ${c.fact ? `<div class="oviz-fact-box">${escHtml(c.fact)}</div>` : ''}
        <div class="oviz-rel-list">
          ${members.slice(0, 24).map(m => `
            <div class="oviz-rel-card" data-oviz-jump="${escHtml(m.id)}">
              <div class="oviz-rel-title">
                <span><span class="oviz-dot" style="background:${TYPE_COLORS[m.entity_type] || '#4b5563'}"></span>${escHtml(m.name)}</span>
                <span class="oviz-muted">度 ${m.degree}</span>
              </div>
              <div class="oviz-rel-sub">${escHtml(m.type_label)}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    inspEl.addEventListener('click', async ev => {
      const openBtn = ev.target.closest('[data-oviz-open]');
      if (openBtn) {
        const nid = openBtn.getAttribute('data-oviz-open');
        openEntityAction(nodeById.get(nid));
        return;
      }
      const jumpCard = ev.target.closest('[data-oviz-jump]');
      if (!jumpCard) return;
      const nid = jumpCard.getAttribute('data-oviz-jump');
      inspectNode(nid);
      if (state.activeTab === 'g6' && g6Instance) {
        try { await g6Instance.focusElement(nid, true); } catch (_) {}
      } else if (state.activeTab === 'echarts' && ecInstance) {
        const nodeObj = nodeById.get(nid);
        if (nodeObj) {
          const sIdx = state.echartsSub === 'bubble'
            ? Math.max(0, presentTypes.findIndex(t => t.key === nodeObj.entity_type))
            : 0;
          try { ecInstance.dispatchAction({ type: 'highlight', seriesIndex: sIdx, name: nodeObj.name }); } catch (_) {}
        }
      }
    });

    function getFilteredData() {
      const q = state.search.trim().toLowerCase();
      const candEdges = rawData.edges.filter(e =>
        state.predicate === 'all' ? true : e.predicate === state.predicate
      );
      const edgeIds = new Set();
      for (const e of candEdges) { edgeIds.add(e.source); edgeIds.add(e.target); }

      const matched = rawData.nodes.filter(n => {
        if (state.predicate !== 'all' && !edgeIds.has(n.id)) return false;
        if (state.entityType !== 'all' && n.entity_type !== state.entityType) return false;
        if (q) {
          const hay = [n.name, ...(n.aliases || [])].join(' ').toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      const keepIds = new Set(matched.map(n => n.id));
      if ((state.entityType !== 'all' || q) && matched.length > 0) {
        for (const e of candEdges) {
          if (keepIds.has(e.source) || keepIds.has(e.target)) {
            keepIds.add(e.source);
            keepIds.add(e.target);
          }
        }
      }

      const primaryIds = new Set(matched.map(n => n.id));
      const nodes = rawData.nodes.filter(n => keepIds.has(n.id));
      const visIds = new Set(nodes.map(n => n.id));
      const edges = candEdges.filter(e => visIds.has(e.source) && visIds.has(e.target));
      return { nodes, edges, primaryIds };
    }

    function buildG6Toolbar() {
      const predOpts = Object.entries(rawData.stats.predicate_counts || {})
        .sort((a, b) => b[1] - a[1])
        .map(([p, cnt]) => `<option value="${escHtml(p)}"${state.predicate === p ? ' selected' : ''}>${escHtml(predNames.get(p) || p)} (${cnt})</option>`)
        .join('');

      toolbarEl.innerHTML = `
        <div class="oviz-btn-group" data-g6-layouts>
          <button type="button" class="oviz-btn${state.g6Layout === 'combo' ? ' active' : ''}" data-g6-layout="combo">Combo 气泡分组</button>
          <button type="button" class="oviz-btn${state.g6Layout === 'd3-force' ? ' active' : ''}" data-g6-layout="d3-force">自由力导向</button>
          <button type="button" class="oviz-btn${state.g6Layout === 'dagre' ? ' active' : ''}" data-g6-layout="dagre">有向分层 (Dagre)</button>
          <button type="button" class="oviz-btn${state.g6Layout === 'concentric' ? ' active' : ''}" data-g6-layout="concentric">同心枢纽圆</button>
        </div>
        <div class="oviz-filter-pills" data-g6-types>
          <button type="button" class="oviz-pill${state.entityType === 'all' ? ' active' : ''}" data-g6-type="all">全部 (${rawData.nodes.length})</button>
          ${presentTypes.map(t => {
            const cnt = rawData.stats.type_counts[t.key] || 0;
            return `<button type="button" class="oviz-pill${state.entityType === t.key ? ' active' : ''}" data-g6-type="${escHtml(t.key)}"><span class="oviz-dot" style="background:${TYPE_COLORS[t.key]}"></span>${escHtml(t.label.split(' ')[0])} (${cnt})</button>`;
          }).join('')}
        </div>
        <select class="oviz-select" data-g6-pred aria-label="谓词筛选">
          <option value="all">全部谓词 (${rawData.edges.length})</option>
          ${predOpts}
        </select>
        <input class="oviz-search" type="search" data-g6-search value="${escHtml(state.search)}" placeholder="搜索主体 / 别名..." />
        <label class="oviz-check"><input type="checkbox" data-g6-edgelabels${state.showEdgeLabels ? ' checked' : ''} /> 边标签</label>
        <label class="oviz-check"><input type="checkbox" data-g6-alllabels${state.showAllLabels ? ' checked' : ''} /> 全标签</label>
        <button type="button" class="oviz-pill" data-g6-fit>适应画布</button>
        ${state.g6Layout === 'combo' ? '<button type="button" class="oviz-pill" data-g6-collapse-all>折叠/展开簇</button>' : ''}
        <button type="button" class="oviz-pill" data-g6-reset>重置</button>
      `;

      footerEl.innerHTML = `
        <span>实线=verified · 虚线=pending/former · 节点半径=连接度 · 双击气泡可折叠/展开</span>
        <span>滚轮缩放 · 拖拽画布/节点 · 单击节点联动右侧档案</span>
      `;

      toolbarEl.querySelector('[data-g6-layouts]')?.addEventListener('click', ev => {
        const b = ev.target.closest('[data-g6-layout]');
        if (!b) return;
        state.g6Layout = b.getAttribute('data-g6-layout');
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-types]')?.addEventListener('click', ev => {
        const b = ev.target.closest('[data-g6-type]');
        if (!b) return;
        state.entityType = b.getAttribute('data-g6-type');
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-pred]')?.addEventListener('change', ev => {
        state.predicate = ev.target.value;
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-search]')?.addEventListener('input', ev => {
        state.search = ev.target.value;
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-edgelabels]')?.addEventListener('change', ev => {
        state.showEdgeLabels = ev.target.checked;
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-alllabels]')?.addEventListener('change', ev => {
        state.showAllLabels = ev.target.checked;
        renderG6();
      });
      toolbarEl.querySelector('[data-g6-fit]')?.addEventListener('click', () => {
        if (g6Instance) try { g6Instance.fitView({ padding: 32 }); } catch (_) {}
      });
      toolbarEl.querySelector('[data-g6-collapse-all]')?.addEventListener('click', async () => {
        if (!g6Instance || state.g6Layout !== 'combo') return;
        state.combosCollapsed = !state.combosCollapsed;
        const combos = g6Instance.getComboData ? g6Instance.getComboData() : [];
        for (const c of combos) {
          try {
            if (state.combosCollapsed && g6Instance.collapseElement) await g6Instance.collapseElement(c.id);
            else if (!state.combosCollapsed && g6Instance.expandElement) await g6Instance.expandElement(c.id);
          } catch (_) {}
        }
        setTimeout(() => { try { g6Instance?.fitView({ padding: 32 }); } catch (_) {} }, 150);
      });
      toolbarEl.querySelector('[data-g6-reset]')?.addEventListener('click', () => {
        state.g6Layout = isPortal ? 'd3-force' : 'combo';
        state.entityType = 'all';
        state.predicate = 'all';
        state.search = '';
        state.showEdgeLabels = false;
        state.showAllLabels = rawData.nodes.length <= 85;
        state.combosCollapsed = false;
        renderInspectorOverview();
        renderG6();
      });
    }

    async function renderG6() {
      const seq = ++renderToken;
      clearErr();
      teardownECharts();
      teardownG6();
      buildG6Toolbar();
      loadingEl.hidden = false;

      let G6Lib;
      try {
        G6Lib = await loadLibrary(
          `${assetBase}/vendor/g6.min.js`,
          'G6',
          'https://cdn.jsdelivr.net/npm/@antv/g6@5/dist/g6.min.js'
        );
      } catch (err) {
        if (seq !== renderToken || destroyed) return;
        loadingEl.hidden = true;
        showErr('AntV G6 v5 加载失败：' + (err?.message || String(err)));
        return;
      }
      if (seq !== renderToken || destroyed || state.activeTab !== 'g6') return;
      loadingEl.hidden = true;
      stageEl.innerHTML = '';

      const { nodes, edges, primaryIds } = getFilteredData();
      const useCombo = state.g6Layout === 'combo';
      const usedClusters = new Set(nodes.map(n => n.cluster_id));
      const g6Nodes = nodes.map(n => {
        const obj = { id: n.id, data: { ...n, isMatch: primaryIds.has(n.id) } };
        if (useCombo) obj.combo = n.cluster_id;
        return obj;
      });
      const g6Edges = edges.map(e => ({ id: e.id, source: e.source, target: e.target, data: { ...e } }));
      const g6Combos = useCombo
        ? (rawData.clusters || []).filter(c => usedClusters.has(c.id)).map(c => ({
            id: c.id,
            data: { label: c.name, ...c },
          }))
        : [];

      const nSize = d => {
        const deg = (d?.data?.degree) || 1;
        return (nodes.length > 90 ? 16 : 21) + Math.min(deg, 10) * (nodes.length > 90 ? 2.4 : 3.0);
      };

      const rect = stageEl.getBoundingClientRect();
      const width = Math.max(320, Math.round(rect.width || 720));
      const height = Math.max(460, Math.round(rect.height || 540));

      let layoutCfg;
      if (useCombo) {
        layoutCfg = {
          type: 'combo-combined',
          comboPadding: 18,
          comboSpacing: nodes.length > 90 ? 64 : 52,
          nodeSpacing: nodes.length > 90 ? 18 : 26,
          nodeSize: nodes.length > 90 ? 48 : 62,
          layout: comboId =>
            comboId
              ? { type: 'concentric', preventOverlap: true, nodeSize: nodes.length > 90 ? 52 : 68, minNodeSpacing: 18 }
              : { type: 'force', preventOverlap: true, linkDistance: nodes.length > 90 ? 250 : 205, gravity: 5 },
        };
      } else if (state.g6Layout === 'd3-force') {
        layoutCfg = {
          type: 'd3-force',
          link: { distance: nodes.length > 90 ? 95 : 120, strength: 0.7 },
          manyBody: { strength: nodes.length > 90 ? -240 : -360 },
          collide: { radius: d => nSize(d) / 2 + 18, strength: 0.9 },
          x: { strength: 0.08 },
          y: { strength: 0.08 },
        };
      } else if (state.g6Layout === 'dagre') {
        layoutCfg = {
          type: 'antv-dagre',
          rankdir: 'LR',
          nodesep: 28,
          ranksep: 68,
        };
      } else {
        layoutCfg = {
          type: 'concentric',
          preventOverlap: true,
          nodeSize: 58,
          sortBy: 'degree',
          equidistant: false,
          minNodeSpacing: 18,
        };
      }

      const showNodeLabel = d => {
        if (state.showAllLabels || Boolean(state.search.trim())) return shortLabel(d.data.name);
        return d.data.degree >= 3 ? shortLabel(d.data.name) : '';
      };

      const g = new G6Lib.Graph({
        container: stageEl,
        width,
        height,
        data: { nodes: g6Nodes, edges: g6Edges, combos: g6Combos },
        node: {
          type: 'circle',
          style: {
            size: d => nSize(d),
            fill: d => TYPE_COLORS[d.data.entity_type] || '#4b5563',
            stroke: d => d.data.entity_type === 'product' ? '#ede9fe' : '#faf8f3',
            lineWidth: d => d.data.entity_type === 'product' ? 3 : 2,
            lineDash: d => d.data.entity_type === 'product' ? [3, 2] : undefined,
            opacity: d => d.data.isMatch ? 1 : 0.35,
            cursor: 'pointer',
            labelText: showNodeLabel,
            labelPlacement: 'bottom',
            labelOffsetY: 4,
            labelFontSize: 11,
            labelFontWeight: d => d.data.degree >= 4 ? 600 : 400,
            labelFill: '#1e1b18',
            labelBackground: true,
            labelBackgroundFill: 'rgba(250,248,243,0.88)',
            labelBackgroundRadius: 3,
            labelPadding: [1, 4],
          },
          state: {
            active: {
              halo: true,
              haloStroke: '#8b261d',
              haloLineWidth: 8,
              haloOpacity: 0.25,
              lineWidth: 3,
              labelText: d => shortLabel(d.data.name),
            },
            inactive: { opacity: 0.18 },
          },
        },
        edge: {
          type: 'quadratic',
          style: {
            stroke: d => d.data.verification === 'verified' ? '#6d6253' : '#b29b79',
            lineWidth: d => d.data.verification === 'verified' ? 1.4 : 1.1,
            lineDash: d => (d.data.verification !== 'verified' || d.data.status === 'former') ? [5, 4] : undefined,
            strokeOpacity: 0.68,
            endArrow: true,
            endArrowSize: 5.5,
            cursor: 'pointer',
            labelText: d => state.showEdgeLabels ? d.data.predicate_label : '',
            labelFontSize: 10,
            labelFill: '#574e41',
            labelBackground: true,
            labelBackgroundFill: 'rgba(255,255,255,0.88)',
            labelPadding: [1, 3],
            labelAutoRotate: true,
          },
          state: {
            active: {
              stroke: '#8b261d',
              lineWidth: 2.4,
              strokeOpacity: 1,
              labelText: d => d.data.predicate_label,
            },
            inactive: { strokeOpacity: 0.12 },
          },
        },
        combo: {
          type: 'circle',
          style: {
            labelText: d => d.data.label,
            labelPlacement: 'top',
            labelOffsetY: -6,
            labelFontSize: 11.5,
            labelFontWeight: 600,
            labelFill: '#1e1b18',
            labelBackground: true,
            labelBackgroundFill: 'rgba(250,248,243,0.92)',
            labelBackgroundRadius: 4,
            labelPadding: [2, 6],
            padding: 20,
            lineWidth: 1.5,
            lineDash: [4, 3],
            stroke: d => hexToRgba(clusterColors.get(d.id) || '#4b5563', 0.55),
            fill: d => hexToRgba(clusterColors.get(d.id) || '#4b5563', 0.08),
            cursor: 'pointer',
          },
        },
        layout: layoutCfg,
        behaviors: [
          'drag-canvas',
          'zoom-canvas',
          'drag-element',
          { type: 'hover-activate', degree: 1, state: 'active', inactiveState: 'inactive' },
          'collapse-expand',
        ],
        plugins: [
          {
            type: 'tooltip',
            trigger: 'hover',
            enable: ev => ev.targetType === 'node' || ev.targetType === 'edge',
            getContent: (_ev, items) => {
              const it = items && items[0];
              if (!it || !it.data) return '';
              const d = it.data;
              if (d.entity_type) {
                return `<div style="font-size:12px;line-height:1.5;max-width:260px;">
                  <div style="font-weight:650;">${escHtml(d.name)}</div>
                  <div style="color:#6b6457;">${escHtml(d.type_label)} · 度 ${escHtml(d.degree)} (出 ${escHtml(d.out_degree)} / 入 ${escHtml(d.in_degree)})</div>
                  <div style="color:#6b6457;">${escHtml(d.cluster_name)}</div>
                </div>`;
              }
              return `<div style="font-size:12px;line-height:1.5;max-width:280px;">
                <div style="font-weight:650;">${escHtml(d.source_name)} → ${escHtml(d.target_name)}</div>
                <div>关系：${escHtml(d.predicate_label)} (${escHtml(d.predicate)})</div>
                <div style="color:#6b6457;">${escHtml(d.label)}</div>
                <div style="color:#6b6457;">状态：${escHtml(d.verification)} / ${escHtml(d.status)} · 证据 ${escHtml(d.evidence_count)}</div>
              </div>`;
            },
          },
        ],
      });

      g6Instance = g;
      g.once(G6Lib.GraphEvent.AFTER_LAYOUT, () => {
        if (seq !== renderToken || g6Instance !== g) return;
        try { g.fitView({ padding: 32 }); } catch (_) {}
      });
      g.on('node:click', ev => { if (ev.target?.id) inspectNode(ev.target.id); });
      g.on('edge:click', ev => { if (ev.target?.id) inspectEdge(ev.target.id); });
      g.on('combo:click', ev => { if (ev.target?.id) inspectCombo(ev.target.id); });

      let rafId = 0;
      g6Observer = new ResizeObserver(() => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (g6Instance !== g) return;
          const r = stageEl.getBoundingClientRect();
          if (r.width > 120 && r.height > 120 && typeof g.setSize === 'function') {
            try { g.setSize(Math.round(r.width), Math.round(r.height)); } catch (_) {}
          }
        });
      });
      g6Observer.observe(stageEl);

      try {
        await g.render();
        if (seq !== renderToken) return;
        setTimeout(() => {
          if (seq === renderToken && g6Instance === g) {
            try { g.fitView({ padding: 32 }); } catch (_) {}
          }
        }, 120);
      } catch (err) {
        showErr('G6 渲染异常：' + (err?.message || String(err)));
      }
    }

    function buildEChartsToolbar() {
      const predOpts = Object.entries(rawData.stats.predicate_counts || {})
        .sort((a, b) => b[1] - a[1])
        .map(([p, cnt]) => `<option value="${escHtml(p)}"${state.predicate === p ? ' selected' : ''}>${escHtml(predNames.get(p) || p)} (${cnt})</option>`)
        .join('');

      const isForce = state.echartsSub === 'force';
      toolbarEl.innerHTML = `
        <div class="oviz-btn-group" data-ec-subs>
          <button type="button" class="oviz-btn${state.echartsSub === 'bubble' ? ' active' : ''}" data-ec-sub="bubble">枢纽气泡图 (出度×入度)</button>
          <button type="button" class="oviz-btn${state.echartsSub === 'force' ? ' active' : ''}" data-ec-sub="force">力导向关系网</button>
          <button type="button" class="oviz-btn${state.echartsSub === 'stats' ? ' active' : ''}" data-ec-sub="stats">${isPortal ? '赛道实体矩阵' : '谓词与类型分布'}</button>
        </div>
        ${isForce ? `
          <div class="oviz-btn-group" data-ec-colors>
            <button type="button" class="oviz-btn${state.echartsColorBy === 'cluster' ? ' active' : ''}" data-ec-color="cluster">${isPortal ? '按赛道簇' : '按血缘簇'}</button>
            <button type="button" class="oviz-btn${state.echartsColorBy === 'type' ? ' active' : ''}" data-ec-color="type">按实体类型</button>
          </div>
          <select class="oviz-select" data-ec-pred aria-label="谓词筛选">
            <option value="all">全部谓词 (${rawData.edges.length})</option>
            ${predOpts}
          </select>
          <label class="oviz-check"><input type="checkbox" data-ec-edgelabels${state.showEdgeLabels ? ' checked' : ''} /> 边标签</label>
        ` : ''}
        ${state.echartsSub !== 'stats' ? `<input class="oviz-search" type="search" data-ec-search value="${escHtml(state.search)}" placeholder="高亮主体..." />` : ''}
        <button type="button" class="oviz-pill" data-ec-reset>重置</button>
      `;

      if (state.echartsSub === 'bubble') {
        footerEl.innerHTML = '<span>X=出度（发起创立/投资/产出/供给）· Y=入度（聚才/融资/被引用）· 气泡面积=总连接度（点击气泡查看档案）</span><span>图例可点击过滤</span>';
      } else if (state.echartsSub === 'force') {
        footerEl.innerHTML = '<span>悬停自动聚焦 1-hop 邻接 · 滚轮缩放与拖拽节点 · 点击图例筛选群体</span><span>点击节点联动右侧详情</span>';
      } else {
        footerEl.innerHTML = `<span>${isPortal ? '全库已连边核心实体按赛道与实体类型分布（含未标赛道滞留项）' : '本赛道业务边受控谓词频次统计'}</span><span>基于 work/registry.sqlite3 实时导出</span>`;
      }

      toolbarEl.querySelector('[data-ec-subs]')?.addEventListener('click', ev => {
        const b = ev.target.closest('[data-ec-sub]');
        if (!b) return;
        state.echartsSub = b.getAttribute('data-ec-sub');
        updateECharts();
      });
      toolbarEl.querySelector('[data-ec-colors]')?.addEventListener('click', ev => {
        const b = ev.target.closest('[data-ec-color]');
        if (!b) return;
        state.echartsColorBy = b.getAttribute('data-ec-color');
        updateECharts();
      });
      toolbarEl.querySelector('[data-ec-pred]')?.addEventListener('change', ev => {
        state.predicate = ev.target.value;
        updateECharts();
      });
      toolbarEl.querySelector('[data-ec-edgelabels]')?.addEventListener('change', ev => {
        state.showEdgeLabels = ev.target.checked;
        updateECharts();
      });
      toolbarEl.querySelector('[data-ec-search]')?.addEventListener('input', ev => {
        state.search = ev.target.value;
        updateECharts();
      });
      toolbarEl.querySelector('[data-ec-reset]')?.addEventListener('click', () => {
        state.echartsSub = 'bubble';
        state.echartsColorBy = 'cluster';
        state.predicate = 'all';
        state.search = '';
        state.showEdgeLabels = false;
        renderInspectorOverview();
        updateECharts();
      });
    }

    function buildEChartsOption() {
      const q = state.search.trim().toLowerCase();
      if (state.echartsSub === 'bubble') {
        const maxOut = Math.max(1, ...rawData.nodes.map(n => n.out_degree));
        const maxIn = Math.max(1, ...rawData.nodes.map(n => n.in_degree));
        const labelThresh = rawData.nodes.length > 90 ? 4 : 3;
        const sizeMult = rawData.nodes.length > 90 ? 4.2 : 5.2;

        const seriesList = presentTypes.map(t => {
          const pts = rawData.nodes
            .filter(n => n.entity_type === t.key)
            .map(n => {
              const matched = !q || [n.name, ...(n.aliases || [])].join(' ').toLowerCase().includes(q);
              const x = +(n.out_degree + deterministicOffset(n.id + ':x', 0.28)).toFixed(3);
              const y = +(n.in_degree + deterministicOffset(n.id + ':y', 0.28)).toFixed(3);
              return {
                name: n.name,
                value: [x, y, n.degree, n.out_degree, n.in_degree],
                symbolSize: Math.min(58, 12 + n.degree * sizeMult),
                itemStyle: {
                  color: TYPE_COLORS[t.key],
                  opacity: matched ? 0.84 : 0.14,
                  borderColor: matched ? '#faf8f3' : 'transparent',
                  borderWidth: 1.5,
                },
                label: {
                  show: matched && (n.degree >= labelThresh || Boolean(q)),
                  position: 'top',
                  formatter: () => shortLabel(n.name),
                  fontSize: 11,
                  color: '#1e1b18',
                  backgroundColor: 'rgba(250,248,243,0.84)',
                  padding: [1, 3],
                },
                raw: n,
              };
            });
          return {
            name: t.label,
            type: 'scatter',
            data: pts,
            itemStyle: { color: TYPE_COLORS[t.key] },
            emphasis: { focus: 'self', scale: 1.18 },
            labelLayout: { hideOverlap: true },
          };
        });

        return {
          color: presentTypes.map(t => TYPE_COLORS[t.key]),
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'item',
            confine: true,
            backgroundColor: '#ffffff',
            borderColor: '#dfd7c5',
            borderWidth: 1,
            textStyle: { color: '#1e1b18', fontSize: 12 },
            formatter: params => {
              const d = params.data && params.data.raw;
              if (!d) return escHtml(params.name);
              return `<div style="max-width:250px;white-space:normal;">
                <div style="font-weight:650;">${escHtml(d.name)}</div>
                <div>类型：${escHtml(d.type_label)}</div>
                <div>出度：<strong>${escHtml(d.out_degree)}</strong> · 入度：<strong>${escHtml(d.in_degree)}</strong> · 总度：<strong>${escHtml(d.degree)}</strong></div>
                <div style="color:#6b6457;">${escHtml(d.cluster_name)}</div>
              </div>`;
            },
          },
          legend: { type: 'scroll', top: 8, left: 10, right: 10, textStyle: { fontSize: 12, color: '#1e1b18' } },
          grid: { left: 66, right: 26, top: 64, bottom: 52 },
          xAxis: {
            type: 'value',
            name: '出度 Out-Degree（创立 / 投资 / 研发 / 供给）→',
            nameLocation: 'middle',
            nameGap: 30,
            min: -0.5,
            max: maxOut + 0.8,
            minInterval: 1,
            splitLine: { lineStyle: { color: '#ece5d5', type: 'dashed' } },
          },
          yAxis: {
            type: 'value',
            name: '入度 In-Degree (汇聚 / 被投 / 引用)',
            nameLocation: 'middle',
            nameGap: 44,
            min: -0.5,
            max: maxIn + 0.8,
            minInterval: 1,
            splitLine: { lineStyle: { color: '#ece5d5', type: 'dashed' } },
          },
          series: seriesList,
        };
      }

      if (state.echartsSub === 'force') {
        const filteredEdges = rawData.edges.filter(e =>
          state.predicate === 'all' ? true : e.predicate === state.predicate
        );
        const activeIds = new Set();
        for (const e of filteredEdges) { activeIds.add(e.source); activeIds.add(e.target); }
        const visNodes = state.predicate === 'all'
          ? rawData.nodes
          : rawData.nodes.filter(n => activeIds.has(n.id));

        const categories = state.echartsColorBy === 'cluster'
          ? (rawData.clusters || []).map(c => ({
              name: c.name,
              itemStyle: { color: clusterColors.get(c.id) || '#4b5563' },
            }))
          : presentTypes.map(t => ({
              name: t.label,
              itemStyle: { color: TYPE_COLORS[t.key] },
            }));

        const catByCluster = new Map((rawData.clusters || []).map((c, i) => [c.id, i]));
        const catByType = new Map(presentTypes.map((t, i) => [t.key, i]));

        const ecNodes = visNodes.map(n => {
          const matched = !q || [n.name, ...(n.aliases || [])].join(' ').toLowerCase().includes(q);
          return {
            id: n.id,
            name: n.name,
            value: n.degree,
            category: state.echartsColorBy === 'cluster'
              ? (catByCluster.get(n.cluster_id) ?? 0)
              : (catByType.get(n.entity_type) ?? 0),
            symbolSize: (visNodes.length > 90 ? 11 : 15) + Math.sqrt(n.degree) * (visNodes.length > 90 ? 6.5 : 8.5),
            itemStyle: {
              opacity: matched ? 0.96 : 0.16,
              borderColor: n.entity_type === 'product' ? '#ede9fe' : '#faf8f3',
              borderWidth: n.entity_type === 'product' ? 2.4 : 1.5,
            },
            label: {
              show: matched && (visNodes.length > 90 ? n.degree >= 3 : n.degree >= 2 || Boolean(q)),
              position: 'bottom',
              formatter: () => shortLabel(n.name),
              fontSize: 11,
              color: '#1e1b18',
              backgroundColor: 'rgba(250,248,243,0.82)',
              padding: [1, 3],
              borderRadius: 3,
            },
            raw: n,
          };
        });

        const ecLinks = filteredEdges.map(e => ({
          source: e.source,
          target: e.target,
          value: e.predicate_label,
          lineStyle: {
            color: e.verification === 'verified' ? '#6d6253' : '#b29b79',
            width: e.verification === 'verified' ? 1.4 : 1.1,
            type: (e.verification !== 'verified' || e.status === 'former') ? 'dashed' : 'solid',
            curveness: 0.14,
            opacity: 0.68,
          },
          raw: e,
        }));

        return {
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'item',
            confine: true,
            backgroundColor: '#ffffff',
            borderColor: '#dfd7c5',
            borderWidth: 1,
            textStyle: { color: '#1e1b18', fontSize: 12 },
            formatter: params => {
              if (params.dataType === 'edge' && params.data.raw) {
                const d = params.data.raw;
                return `<div style="max-width:260px;white-space:normal;">
                  <div style="font-weight:650;">${escHtml(d.source_name)} → ${escHtml(d.target_name)}</div>
                  <div>关系：${escHtml(d.predicate_label)} (${escHtml(d.predicate)})</div>
                  <div style="color:#6b6457;">${escHtml(d.label)}</div>
                </div>`;
              }
              const d = params.data && params.data.raw;
              if (!d) return escHtml(params.name);
              return `<div style="max-width:250px;white-space:normal;">
                <div style="font-weight:650;">${escHtml(d.name)}</div>
                <div style="color:#6b6457;">${escHtml(d.type_label)} · 度 ${escHtml(d.degree)}（出 ${escHtml(d.out_degree)} / 入 ${escHtml(d.in_degree)}）</div>
                <div style="color:#6b6457;">${escHtml(d.cluster_name)}</div>
              </div>`;
            },
          },
          legend: { type: 'scroll', top: 8, left: 12, right: 12, textStyle: { fontSize: 12, color: '#1e1b18' } },
          series: [
            {
              name: '本体关系网',
              type: 'graph',
              layout: 'force',
              top: 56,
              bottom: 24,
              roam: true,
              zoom: visNodes.length > 90 ? 0.78 : 0.86,
              draggable: true,
              force: {
                repulsion: visNodes.length > 90 ? 150 : 200,
                gravity: 0.25,
                edgeLength: [50, 110],
                friction: 0.62,
                layoutAnimation: true,
              },
              data: ecNodes,
              links: ecLinks,
              categories,
              edgeSymbol: ['none', 'arrow'],
              edgeSymbolSize: [4, 8.5],
              edgeLabel: {
                show: state.showEdgeLabels,
                fontSize: 10,
                color: '#574e41',
                backgroundColor: 'rgba(255,255,255,0.85)',
                padding: [1, 3],
                formatter: p => (p.data?.raw ? p.data.raw.predicate_label : ''),
              },
              emphasis: { focus: 'adjacency', lineStyle: { width: 2.6, opacity: 1, color: '#8b261d' } },
            },
          ],
        };
      }

      // 'stats' bar view
      const narrow = (stageEl.clientWidth || 720) < 520;
      if (isPortal && Array.isArray(rawData.sector_matrix) && rawData.sector_matrix.length > 0) {
        const rows = [...rawData.sector_matrix].reverse();
        return {
          color: presentTypes.map(t => TYPE_COLORS[t.key]),
          backgroundColor: 'transparent',
          tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, confine: true },
          legend: { type: 'scroll', top: 8, left: 8, right: 8, textStyle: { fontSize: 12, color: '#1e1b18' } },
          grid: { left: narrow ? 96 : 134, right: narrow ? 18 : 34, top: 48, bottom: 44 },
          xAxis: {
            type: 'value',
            name: '已连边核心实体数',
            nameLocation: 'middle',
            nameGap: 26,
            splitLine: { lineStyle: { color: '#ece5d5', type: 'dashed' } },
          },
          yAxis: {
            type: 'category',
            data: rows.map(r => r.sector),
            axisLabel: { fontSize: 11.5, color: '#1e1b18', width: narrow ? 88 : 124, overflow: 'truncate' },
          },
          series: presentTypes.map(t => ({
            name: t.label,
            type: 'bar',
            stack: 'total',
            itemStyle: { color: TYPE_COLORS[t.key] },
            data: rows.map(r => r[t.key] || 0),
          })),
        };
      }

      const preds = [...(rawData.predicate_stats || [])].reverse();
      return {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, confine: true },
        grid: { left: narrow ? 100 : 134, right: narrow ? 24 : 36, top: 28, bottom: 44 },
        xAxis: {
          type: 'value',
          name: '业务边数量',
          nameLocation: 'middle',
          nameGap: 26,
          minInterval: 1,
          splitLine: { lineStyle: { color: '#ece5d5', type: 'dashed' } },
        },
        yAxis: {
          type: 'category',
          data: preds.map(p => `${p.label} (${p.predicate})`),
          axisLabel: { fontSize: 11.5, color: '#1e1b18', width: narrow ? 92 : 124, overflow: 'truncate' },
        },
        series: [
          {
            name: '业务边数',
            type: 'bar',
            barMaxWidth: 24,
            itemStyle: { color: '#1e3a5f', borderRadius: [0, 4, 4, 0] },
            label: { show: true, position: 'right', color: '#1e1b18', fontSize: 11.5 },
            data: preds.map(p => p.count),
          },
        ],
      };
    }

    async function updateECharts() {
      const seq = ++renderToken;
      clearErr();
      teardownG6();
      buildEChartsToolbar();

      if (!ecInstance) {
        loadingEl.hidden = false;
        let ecLib;
        try {
          ecLib = await loadLibrary(
            `${assetBase}/vendor/echarts.min.js`,
            'echarts',
            'https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js'
          );
        } catch (err) {
          if (seq !== renderToken || destroyed) return;
          loadingEl.hidden = true;
          showErr('Apache ECharts 加载失败：' + (err?.message || String(err)));
          return;
        }
        if (seq !== renderToken || destroyed || state.activeTab !== 'echarts') return;
        loadingEl.hidden = true;
        stageEl.innerHTML = '';
        ecInstance = ecLib.init(stageEl);
        ecInstance.on('click', params => {
          if (params.dataType === 'edge' && params.data?.raw) {
            inspectEdge(params.data.raw.id);
          } else if (params.data?.raw) {
            inspectNode(params.data.raw.id);
          }
        });
        let rafId = 0;
        let lastNarrow = (stageEl.clientWidth || 720) < 520;
        ecObserver = new ResizeObserver(() => {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            if (!ecInstance) return;
            ecInstance.resize();
            const nowNarrow = (stageEl.clientWidth || 720) < 520;
            if (state.echartsSub === 'stats' && nowNarrow !== lastNarrow) {
              lastNarrow = nowNarrow;
              ecInstance.setOption(buildEChartsOption(), { notMerge: true });
            }
          });
        });
        ecObserver.observe(stageEl);
      }

      if (seq !== renderToken || destroyed || !ecInstance) return;
      ecInstance.setOption(buildEChartsOption(), { notMerge: true });
      requestAnimationFrame(() => { if (ecInstance) ecInstance.resize(); });
    }

    renderInspectorOverview();

    return {
      activate(tab) {
        if (destroyed) return;
        if (tab !== 'g6' && tab !== 'echarts') return;
        state.activeTab = tab;
        if (tab === 'g6') renderG6();
        else updateECharts();
      },
      destroy() {
        destroyed = true;
        renderToken++;
        teardownG6();
        teardownECharts();
      },
    };
  }

  window.OntologyViz = { mount };
})();

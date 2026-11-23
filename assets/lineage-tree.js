(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.LineageTree = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var VALID_RELS = { support: true, refute: true, revised: true };
  var VERDICT_META = {
    verified: { label: '✓ 成立', cls: 'ltt-verdict--verified' },
    boundary: { label: '◐ 需加边界', cls: 'ltt-verdict--boundary' },
    falsified: { label: '✗ 历史证伪', cls: 'ltt-verdict--falsified' },
    open: { label: '? 待核查', cls: 'ltt-verdict--open' },
  };

  function escHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function validateSchema(data) {
    var errors = [];
    var warnings = [];
    if (!data || typeof data !== 'object') {
      return { ok: false, errors: ['Schema root must be an object'], warnings: warnings };
    }
    if (!Array.isArray(data.theses) || data.theses.length === 0) {
      errors.push('theses must be a non-empty array');
    } else if (data.theses.length < 2 || data.theses.length > 4) {
      warnings.push('Recommended 2-4 top theses, found ' + data.theses.length);
    }
    if (!Array.isArray(data.stages) || data.stages.length === 0) {
      errors.push('stages must be a non-empty array');
    }
    if (!Array.isArray(data.edges)) {
      errors.push('edges must be an array');
    }
    if (!data.docs || typeof data.docs !== 'object') {
      errors.push('docs must be an object');
    }

    var thesisIds = {};
    (data.theses || []).forEach(function (t, i) {
      if (!t || !t.id || !t.title) {
        errors.push('theses[' + i + '] missing id or title');
        return;
      }
      if (thesisIds[t.id]) errors.push('Duplicate thesis id: ' + t.id);
      thesisIds[t.id] = true;
    });

    var nodeIds = {};
    (data.stages || []).forEach(function (st, si) {
      if (!st || !st.id || !Array.isArray(st.nodes)) {
        errors.push('stages[' + si + '] missing id or nodes array');
        return;
      }
      st.nodes.forEach(function (n, ni) {
        if (!n || !n.id || !n.title) {
          errors.push('stages[' + si + '].nodes[' + ni + '] missing id or title');
          return;
        }
        if (nodeIds[n.id]) errors.push('Duplicate node id: ' + n.id);
        nodeIds[n.id] = n;
        if (!data.docs || !data.docs[n.id]) {
          errors.push('Missing docs entry for node: ' + n.id);
        }
      });
    });

    (data.edges || []).forEach(function (e, ei) {
      if (!e || !e.thesis || !e.target || !e.rel) {
        errors.push('edges[' + ei + '] missing thesis, target, or rel');
        return;
      }
      if (!VALID_RELS[e.rel]) {
        errors.push('edges[' + ei + '] invalid rel: ' + e.rel);
      }
      if (!thesisIds[e.thesis]) {
        errors.push('edges[' + ei + '] references unknown thesis: ' + e.thesis);
      }
      if (!nodeIds[e.target]) {
        errors.push('edges[' + ei + '] references unknown target: ' + e.target);
      }
    });

    return { ok: errors.length === 0, errors: errors, warnings: warnings };
  }

  function injectStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('ltt-styles')) return;
    var css = [
      '.ltt-root{position:relative;color:var(--ink,#26231e);font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;}',
      '.ltt-head{display:flex;flex-direction:column;gap:10px;padding-bottom:14px;margin-bottom:16px;border-bottom:1px solid var(--rule,#dcd3c0);}',
      '.ltt-head--compact{padding-bottom:10px;margin-bottom:14px;}',
      '.ltt-head-top{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:10px;}',
      '.ltt-title{font-family:"Iowan Old Style","Palatino Linotype","Songti SC","STSong",Georgia,serif;font-size:21px;font-weight:700;margin:0;color:var(--ink,#26231e);}',
      '.ltt-sub{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;color:var(--muted,#6e6658);margin:3px 0 0;}',
      '.ltt-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;}',
      '.ltt-filters,.ltt-stages-nav{display:flex;flex-wrap:wrap;align-items:center;gap:6px;}',
      '.ltt-filter-pill,.ltt-stage-pill{display:inline-flex;align-items:center;gap:5px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;padding:3px 8px;border-radius:3px;border:1px solid var(--rule,#dcd3c0);background:var(--paper,#f7f3e8);color:var(--muted,#6e6658);cursor:pointer;transition:border-color 140ms ease,background-color 140ms ease,color 140ms ease;}',
      '.ltt-filter-pill:hover,.ltt-stage-pill:hover,.ltt-stage-pill.is-hovered{border-color:var(--rule-dark,#2b2722);color:var(--ink,#26231e);background:var(--paper-alt,#efe9d8);}',
      '.ltt-filter-pill.is-selected{border-color:var(--rule-dark,#2b2722);background:var(--paper-alt,#efe9d8);color:var(--ink,#26231e);font-weight:600;}',
      '.ltt-filter-pill[data-filter="support"].is-selected{border-color:var(--accent,#8b3a2b);background:rgba(139,58,43,0.08);color:var(--accent,#8b3a2b);}',
      '.ltt-filter-pill[data-filter="refute"].is-selected{border-color:var(--ink-blue,#234b5e);background:rgba(35,75,94,0.08);color:var(--ink-blue,#234b5e);}',
      '.ltt-filter-pill[data-filter="revised"].is-selected{border-color:#7a7060;background:rgba(122,112,96,0.10);color:var(--ink,#26231e);}',
      '.ltt-stage-pill.is-top{border-color:rgba(139,58,43,0.34);color:var(--accent,#8b3a2b);}',
      '.ltt-lock-badge{display:none;align-items:center;gap:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;padding:3px 9px;border-radius:3px;background:rgba(139,58,43,0.09);color:var(--accent,#8b3a2b);border:1px solid rgba(139,58,43,0.32);cursor:pointer;}',
      '.ltt-lock-badge.is-visible{display:inline-flex;}',
      '.ltt-root--audit .ltt-lock-badge{background:rgba(35,75,94,0.09);color:var(--ink-blue,#234b5e);border-color:rgba(35,75,94,0.32);}',
      '.ltt-tree{position:relative;isolation:isolate;}',
      '.ltt-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:18;overflow:visible;}',
      '.ltt-stage{position:relative;padding-left:28px;padding-bottom:22px;}',
      '@media (min-width:640px){.ltt-stage{padding-left:36px;padding-bottom:26px;}}',
      '.ltt-stage:last-of-type{padding-bottom:4px;}',
      '.ltt-stage::before{content:"";position:absolute;left:7px;top:15px;bottom:-6px;width:1px;background:#c8bda6;z-index:5;}',
      '@media (min-width:640px){.ltt-stage::before{left:10px;}}',
      '.ltt-stage--falsified::before,.ltt-stage--gaps::before{background:repeating-linear-gradient(to bottom,#7a7060 0,#7a7060 3px,transparent 3px,transparent 7px);bottom:8px;}',
      '.ltt-stage-dot{position:absolute;left:2px;top:4px;width:11px;height:11px;border-radius:9999px;background:var(--paper,#f7f3e8);border:1.5px solid var(--muted,#6e6658);z-index:8;transition:transform 180ms ease,border-color 180ms ease;}',
      '@media (min-width:640px){.ltt-stage-dot{left:5px;}}',
      '.ltt-stage--thesis .ltt-stage-dot{background:var(--accent,#8b3a2b);border-color:var(--accent,#8b3a2b);box-shadow:0 0 0 3px rgba(139,58,43,0.14);}',
      '.ltt-root--audit .ltt-stage--thesis .ltt-stage-dot{background:var(--ink-blue,#234b5e);border-color:var(--ink-blue,#234b5e);box-shadow:0 0 0 3px rgba(35,75,94,0.14);}',
      '.ltt-stage--falsified .ltt-stage-dot,.ltt-stage--gaps .ltt-stage-dot{border-style:dotted;border-color:#7a7060;}',
      '.ltt-stage.is-stage-hover .ltt-stage-dot{transform:scale(1.22);border-color:var(--rule-dark,#2b2722);}',
      '.ltt-stage-label{display:flex;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:10px;}',
      '.ltt-stage-title{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:700;letter-spacing:0.04em;color:var(--ink,#26231e);}',
      '.ltt-stage--thesis .ltt-stage-title{color:var(--accent,#8b3a2b);}',
      '.ltt-root--audit .ltt-stage--thesis .ltt-stage-title{color:var(--ink-blue,#234b5e);}',
      '.ltt-stage--falsified .ltt-stage-title,.ltt-stage--gaps .ltt-stage-title{color:#7a7060;}',
      '.ltt-stage-meta{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:var(--muted,#6e6658);}',
      '.ltt-theses-grid{display:grid;grid-template-columns:1fr;gap:12px;}',
      '@media (min-width:700px){.ltt-theses-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}',
      '.ltt-nodes-wrap{display:flex;flex-wrap:wrap;gap:8px 9px;}',
      '.ltt-thesis,.ltt-node{position:relative;z-index:10;text-align:left;background:var(--paper,#f7f3e8);border:1px solid #c8bda6;border-radius:4px;cursor:pointer;outline:none;transition:opacity 180ms ease,transform 180ms ease,border-color 180ms ease,background-color 180ms ease,box-shadow 180ms ease;}',
      '.ltt-thesis{padding:12px 14px;width:100%;display:flex;flex-direction:column;gap:4px;}',
      '.ltt-thesis.is-primary{border-left:3.5px solid var(--accent,#8b3a2b);}',
      '.ltt-root--audit .ltt-thesis.is-primary{border-left-color:var(--ink-blue,#234b5e);}',
      '.ltt-thesis:focus-visible,.ltt-node:focus-visible{box-shadow:0 0 0 2px var(--paper,#f7f3e8),0 0 0 4px var(--ink-blue,#234b5e);}',
      '.ltt-node{display:inline-flex;flex-direction:column;gap:2px;padding:7px 11px;max-width:100%;background:rgba(247,243,232,0.96);}',
      '.ltt-node--falsified{border-style:dashed;border-color:rgba(122,112,96,0.58);background:rgba(239,233,216,0.60);}',
      '.ltt-node--falsified .ltt-node-title{text-decoration:line-through;text-decoration-color:rgba(139,58,43,0.45);color:var(--muted,#6e6658);}',
      '.ltt-node--gap{border-style:dashed;border-color:rgba(122,112,96,0.62);background:rgba(239,233,216,0.55);}',
      '.ltt-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;width:100%;}',
      '.ltt-card-idwrap{display:flex;align-items:center;flex-wrap:wrap;gap:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:600;color:var(--muted,#6e6658);}',
      '.ltt-thesis.is-primary .ltt-card-code{color:var(--accent,#8b3a2b);}',
      '.ltt-root--audit .ltt-thesis.is-primary .ltt-card-code{color:var(--ink-blue,#234b5e);}',
      '.ltt-thesis-title{font-family:"Iowan Old Style","Palatino Linotype","Songti SC","STSong",Georgia,serif;font-size:15.5px;font-weight:700;color:var(--ink,#26231e);line-height:1.35;}',
      '.ltt-thesis-sub{font-size:12px;color:var(--muted,#6e6658);line-height:1.45;}',
      '.ltt-node-top{display:flex;align-items:center;justify-content:space-between;gap:6px;}',
      '.ltt-node-title{display:inline-flex;align-items:center;gap:5px;font-size:13px;font-weight:600;color:var(--ink,#26231e);}',
      '.ltt-node-sub{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:var(--muted,#6e6658);}',
      '.ltt-verdict{display:inline-flex;align-items:center;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;line-height:1.2;padding:2px 5px;border-radius:2px;font-weight:600;}',
      '.ltt-verdict--boundary{color:var(--ink-blue,#234b5e);background:rgba(35,75,94,0.09);border:1px solid rgba(35,75,94,0.28);}',
      '.ltt-verdict--falsified{color:var(--accent,#8b3a2b);background:rgba(139,58,43,0.09);border:1px solid rgba(139,58,43,0.32);}',
      '.ltt-verdict--verified{color:#2f5d46;background:rgba(47,93,70,0.09);border:1px solid rgba(47,93,70,0.28);}',
      '.ltt-verdict--open{color:#7a7060;background:rgba(122,112,96,0.10);border:1px solid rgba(122,112,96,0.32);}',
      '.ltt-counts{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10.5px;color:var(--muted,#6e6658);}',
      '.ltt-item.is-dimmed{opacity:0.24;}',
      '.ltt-item.is-active{z-index:26;background:#fbf8ef;box-shadow:0 6px 18px -10px rgba(43,39,34,0.28);}',
      '.ltt-thesis.is-root{border-color:var(--accent,#8b3a2b);background:#fcfaf3;box-shadow:0 8px 22px -12px rgba(139,58,43,0.34);}',
      '.ltt-root--audit .ltt-thesis.is-root{border-color:var(--ink-blue,#234b5e);box-shadow:0 8px 22px -12px rgba(35,75,94,0.34);}',
      '.ltt-node.is-root{border-color:var(--rule-dark,#2b2722);background:#fcfaf3;box-shadow:0 6px 18px -10px rgba(43,39,34,0.34);}',
      '.ltt-item[data-rel="support"]{border-color:var(--accent,#8b3a2b);background:linear-gradient(180deg,#fcf8f3 0%,var(--paper,#f7f3e8) 100%);}',
      '.ltt-item[data-rel="refute"]{border-color:var(--ink-blue,#234b5e);background:linear-gradient(180deg,#f3f7f9 0%,var(--paper,#f7f3e8) 100%);}',
      '.ltt-item[data-rel="revised"]{border-color:#7a7060;border-style:dotted;background:linear-gradient(180deg,#f3efe6 0%,var(--paper-alt,#efe9d8) 100%);}',
      '.ltt-item[data-rel="revised"] .ltt-node-title{color:var(--ink,#26231e);}',
      '.ltt-rel-tag{display:none;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;line-height:1;padding:2px 5px;border-radius:2px;flex-shrink:0;}',
      '.ltt-item[data-rel="support"] .ltt-rel-tag{display:inline-block;color:var(--accent,#8b3a2b);background:rgba(139,58,43,0.08);border:1px solid rgba(139,58,43,0.28);}',
      '.ltt-item[data-rel="refute"] .ltt-rel-tag{display:inline-block;color:var(--ink-blue,#234b5e);background:rgba(35,75,94,0.08);border:1px solid rgba(35,75,94,0.28);}',
      '.ltt-item[data-rel="revised"] .ltt-rel-tag{display:inline-block;color:#7a7060;background:rgba(122,112,96,0.10);border:1px solid rgba(122,112,96,0.34);}',
      '.ltt-jump-btn{display:none;align-items:center;gap:2px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;line-height:1;padding:2px 5px;border-radius:2px;border:1px solid #c8bda6;background:var(--paper,#f7f3e8);color:var(--ink,#26231e);cursor:pointer;}',
      '.ltt-jump-btn:hover{border-color:var(--accent,#8b3a2b);color:var(--accent,#8b3a2b);}',
      '.ltt-tree.has-lock .ltt-node.is-active .ltt-jump-btn{display:inline-flex;}',
      '.ltt-lock-pin{display:none;width:6px;height:6px;border-radius:9999px;background:var(--accent,#8b3a2b);flex-shrink:0;}',
      '.ltt-item[aria-pressed="true"] .ltt-lock-pin{display:inline-block;}',
      '.ltt-edge-path{fill:none;stroke-linecap:round;}',
      '.ltt-edge-path--support{stroke:var(--accent,#8b3a2b);stroke-width:1.75;}',
      '.ltt-edge-path--refute{stroke:var(--ink-blue,#234b5e);stroke-width:1.65;stroke-dasharray:6 4;opacity:0;transition:opacity 220ms ease;}',
      '.ltt-edge-path--refute.is-visible{opacity:0.92;}',
      '.ltt-edge-path--revised{stroke:#7a7060;stroke-width:1.5;stroke-dasharray:2 4;opacity:0;transition:opacity 220ms ease;}',
      '.ltt-edge-path--revised.is-visible{opacity:0.86;}',
      'dialog.ltt-dialog{margin:auto;padding:0;max-width:min(660px,94vw);width:100%;background:transparent;border:none;color:var(--ink,#26231e);}',
      'dialog.ltt-dialog::backdrop{background:rgba(38,35,30,0.44);backdrop-filter:blur(2px);}',
      '.ltt-dlg-card{position:relative;background-color:var(--paper,#f7f3e8);background-image:radial-gradient(rgba(110,100,84,0.16) 1px,transparent 1px);background-size:20px 20px;border:1px solid #c9bea6;border-left:5px solid var(--accent,#8b3a2b);border-radius:3px 8px 8px 3px;box-shadow:0 24px 48px -18px rgba(28,24,18,0.45);padding:20px 22px 22px;}',
      '.ltt-dlg-card[data-rel="refute"]{border-left-color:var(--ink-blue,#234b5e);}',
      '.ltt-dlg-card[data-rel="revised"]{border-left-color:#7a7060;}',
      '.ltt-dlg-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;border-bottom:1px solid var(--rule,#dcd3c0);padding-bottom:10px;margin-bottom:12px;}',
      '.ltt-dlg-kicker{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:var(--muted,#6e6658);margin-bottom:4px;}',
      '.ltt-dlg-title{font-family:"Iowan Old Style","Palatino Linotype","Songti SC","STSong",Georgia,serif;font-size:19px;font-weight:700;margin:0;color:var(--ink,#26231e);line-height:1.35;}',
      '.ltt-dlg-close{padding:4px 8px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;border-radius:3px;border:1px solid var(--rule,#dcd3c0);background:var(--paper,#f7f3e8);color:var(--muted,#6e6658);cursor:pointer;}',
      '.ltt-dlg-close:hover{color:var(--ink,#26231e);border-color:var(--rule-dark,#2b2722);}',
      '.ltt-dlg-meta{display:flex;flex-direction:column;gap:5px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;background:rgba(239,233,216,0.70);border:1px solid var(--rule,#dcd3c0);border-radius:3px;padding:9px 12px;margin-bottom:12px;word-break:break-word;}',
      '.ltt-dlg-meta-k{color:var(--muted,#6e6658);font-weight:600;}',
      '.ltt-dlg-bullets{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;}',
      '.ltt-dlg-bullet{margin:0;padding-left:10px;border-left:2px solid var(--rule,#dcd3c0);font-size:13.5px;line-height:1.6;color:var(--ink,#26231e);}',
      '.ltt-dlg-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;border-top:1px solid var(--rule,#dcd3c0);padding-top:10px;}',
      '.ltt-dlg-open-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;border-radius:3px;border:1px solid var(--accent,#8b3a2b);background:var(--accent,#8b3a2b);color:var(--paper,#f7f3e8);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;font-weight:600;cursor:pointer;}',
      '.ltt-dlg-open-btn:hover{opacity:0.92;}',
      '.ltt-dlg-theses{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}',
      '.ltt-dlg-chip{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:3px;border:1px solid var(--rule,#dcd3c0);background:var(--paper,#f7f3e8);font-size:12px;color:var(--ink,#26231e);cursor:pointer;text-align:left;}',
      '.ltt-dlg-chip:hover{border-color:var(--accent,#8b3a2b);}',
      '@media (prefers-reduced-motion:reduce){.ltt-thesis,.ltt-node,.ltt-stage-dot,.ltt-edge-path{transition:none !important;}}'
    ].join('\n');
    var styleEl = document.createElement('style');
    styleEl.id = 'ltt-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  function resolveVerdict(v) {
    if (!v) return null;
    if (typeof v === 'string') return VERDICT_META[v] || { label: v, cls: 'ltt-verdict--open' };
    if (typeof v === 'object' && v.label) {
      var cls = VERDICT_META[v.kind] ? VERDICT_META[v.kind].cls : 'ltt-verdict--open';
      return { label: v.label, cls: cls };
    }
    return null;
  }

  function formatCountsLabel(thesisId, edges, isAudit) {
    var s = 0, r = 0, x = 0;
    edges.forEach(function (e) {
      if (e.thesis !== thesisId) return;
      if (e.rel === 'support') s++;
      else if (e.rel === 'refute') r++;
      else x++;
    });
    return s + '证 · ' + r + '反 · ' + x + (isAudit ? '缺/修' : '纠');
  }

  function mount(container, data, options) {
    if (!container) throw new Error('LineageTree.mount: container is required');
    var validation = validateSchema(data);
    if (!validation.ok) {
      container.textContent = 'LineageTree schema error: ' + validation.errors.join('; ');
      return null;
    }

    injectStyles();
    var opts = options || {};
    var mode = opts.mode || data.mode || 'sector_lineage';
    var isAudit = mode === 'review_audit';
    var relLabels = {
      support: '实证支撑',
      refute: '反证边界',
      revised: isAudit ? '缺口与修正' : '修正旧错',
    };

    var rootEl = document.createElement('div');
    rootEl.className = 'ltt-root' + (isAudit ? ' ltt-root--audit' : '');

    var thesisMap = {};
    data.theses.forEach(function (t) { thesisMap[t.id] = t; });
    var nodeMap = {};
    data.stages.forEach(function (st) {
      st.nodes.forEach(function (n) { nodeMap[n.id] = n; });
    });

    // Build header toolbar
    var headEl = document.createElement('div');
    headEl.className = 'ltt-head' + (opts.compactHeader ? ' ltt-head--compact' : '');
    var headerTopHtml = '';
    if (!opts.compactHeader && (data.title || data.subtitle)) {
      headerTopHtml =
        '<div class="ltt-head-top">' +
        '<div>' +
        (data.title ? '<h2 class="ltt-title">' + escHtml(data.title) + '</h2>' : '') +
        (data.subtitle ? '<p class="ltt-sub">' + escHtml(data.subtitle) + '</p>' : '') +
        '</div>' +
        '<button type="button" class="ltt-lock-badge"><span style="width:6px;height:6px;border-radius:9999px;background:#8b3a2b;display:inline-block;"></span><span data-ltt-lock-text>已锁定</span><span>×</span></button>' +
        '</div>';
    }

    var toolbarHtml =
      '<div class="ltt-toolbar">' +
      '<div class="ltt-filters" role="group" aria-label="因果连线极性筛选">' +
      '<button type="button" class="ltt-filter-pill is-selected" data-ltt-filter="all">全部 (' + data.edges.length + ')</button>' +
      '<button type="button" class="ltt-filter-pill" data-ltt-filter="support">' +
      '<svg viewBox="0 0 16 8" width="16" height="8" aria-hidden="true"><line x1="0" y1="4" x2="16" y2="4" stroke="#8b3a2b" stroke-width="2" /></svg>' +
      '<span>' + escHtml(relLabels.support) + '</span></button>' +
      '<button type="button" class="ltt-filter-pill" data-ltt-filter="refute">' +
      '<svg viewBox="0 0 16 8" width="16" height="8" aria-hidden="true"><line x1="0" y1="4" x2="16" y2="4" stroke="#234b5e" stroke-width="1.8" stroke-dasharray="4 3" /></svg>' +
      '<span>' + escHtml(relLabels.refute) + '</span></button>' +
      '<button type="button" class="ltt-filter-pill" data-ltt-filter="revised">' +
      '<svg viewBox="0 0 16 8" width="16" height="8" aria-hidden="true"><line x1="0" y1="4" x2="16" y2="4" stroke="#7a7060" stroke-width="1.6" stroke-dasharray="2 3" /></svg>' +
      '<span>' + escHtml(relLabels.revised) + '</span></button>' +
      '</div>' +
      '<div class="ltt-stages-nav">' +
      (opts.compactHeader ? '<button type="button" class="ltt-lock-badge"><span style="width:6px;height:6px;border-radius:9999px;background:#8b3a2b;display:inline-block;"></span><span data-ltt-lock-text>已锁定</span><span>×</span></button>' : '') +
      '<button type="button" class="ltt-stage-pill is-top" data-ltt-stage-link="ltt-stage-thesis">00 ' + (isAudit ? '待审叙事' : '核心判断') + '</button>' +
      data.stages.map(function (st, idx) {
        var num = '0' + (idx + 1);
        return '<button type="button" class="ltt-stage-pill" data-ltt-stage-link="ltt-' + escHtml(st.id) + '">' + num + ' ' + escHtml(st.pill || st.label) + '</button>';
      }).join('') +
      '</div></div>';

    headEl.innerHTML = headerTopHtml + toolbarHtml;
    rootEl.appendChild(headEl);

    // Build tree body + SVG overlay
    var treeEl = document.createElement('div');
    treeEl.className = 'ltt-tree';
    var svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.setAttribute('class', 'ltt-lines');
    svgEl.setAttribute('viewBox', '0 0 100 100');
    svgEl.setAttribute('aria-hidden', 'true');
    treeEl.appendChild(svgEl);

    // Top theses stage
    var topStage = document.createElement('section');
    topStage.className = 'ltt-stage ltt-stage--thesis';
    topStage.id = 'ltt-stage-thesis';
    topStage.innerHTML =
      '<span class="ltt-stage-dot" aria-hidden="true"></span>' +
      '<div class="ltt-stage-label">' +
      '<span class="ltt-stage-title">' + (isAudit ? 'AUDITED CLAIMS · 待核查核心叙事' : 'CURRENT THESES · 当前核心判断') + '</span>' +
      '<span class="ltt-stage-meta">' + data.theses.length + (isAudit ? ' CLAIMS' : ' THESES') + '</span>' +
      '</div>';

    var gridEl = document.createElement('div');
    gridEl.className = 'ltt-theses-grid';
    data.theses.forEach(function (t) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ltt-thesis ltt-item' + (t.primary ? ' is-primary' : '');
      btn.setAttribute('data-id', t.id);
      btn.setAttribute('data-kind', 'thesis');
      btn.setAttribute('aria-pressed', 'false');
      var vMeta = resolveVerdict(t.verdict);
      var countsStr = t.countsLabel || formatCountsLabel(t.id, data.edges, isAudit);
      btn.innerHTML =
        '<div class="ltt-card-top">' +
        '<div class="ltt-card-idwrap">' +
        '<span class="ltt-lock-pin" aria-hidden="true"></span>' +
        '<span class="ltt-card-code">' + escHtml(t.code || t.id) + '</span>' +
        (vMeta ? '<span class="ltt-verdict ' + escHtml(vMeta.cls) + '">' + escHtml(vMeta.label) + '</span>' : '') +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:4px;">' +
        '<span class="ltt-rel-tag" data-rel-label></span>' +
        '<span class="ltt-counts">' + escHtml(countsStr) + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="ltt-thesis-title">' + escHtml(t.title) + '</div>' +
        (t.sub ? '<div class="ltt-thesis-sub">' + escHtml(t.sub) + '</div>' : '');
      gridEl.appendChild(btn);
    });
    topStage.appendChild(gridEl);
    treeEl.appendChild(topStage);

    // Lower stages
    data.stages.forEach(function (st) {
      var sec = document.createElement('section');
      var stCls = 'ltt-stage';
      if (st.style === 'falsified') stCls += ' ltt-stage--falsified';
      else if (st.style === 'gaps') stCls += ' ltt-stage--gaps';
      sec.className = stCls;
      sec.id = 'ltt-' + st.id;
      sec.innerHTML =
        '<span class="ltt-stage-dot" aria-hidden="true"></span>' +
        '<div class="ltt-stage-label">' +
        '<span class="ltt-stage-title">' + escHtml(st.label) + '</span>' +
        (st.meta ? '<span class="ltt-stage-meta">' + escHtml(st.meta) + '</span>' : '') +
        '</div>';

      var wrap = document.createElement('div');
      wrap.className = 'ltt-nodes-wrap';
      st.nodes.forEach(function (n) {
        var btn = document.createElement('button');
        btn.type = 'button';
        var nodeCls = 'ltt-node ltt-item';
        if (n.kind === 'falsified') nodeCls += ' ltt-node--falsified';
        else if (n.kind === 'gap') nodeCls += ' ltt-node--gap';
        btn.className = nodeCls;
        btn.setAttribute('data-id', n.id);
        btn.setAttribute('data-kind', n.kind || 'evidence');
        btn.setAttribute('aria-pressed', 'false');
        var jumpLabel = n.kind === 'gap' ? '↗ 缺口' : n.kind === 'falsified' ? '↗ 复盘' : '↗ 档案';
        btn.innerHTML =
          '<div class="ltt-node-top">' +
          '<span class="ltt-node-title"><span class="ltt-lock-pin" aria-hidden="true"></span><span>' + escHtml(n.title) + '</span></span>' +
          '<span style="display:inline-flex;align-items:center;gap:4px;">' +
          '<span class="ltt-rel-tag" data-rel-label></span>' +
          '<span class="ltt-jump-btn" data-open-id="' + escHtml(n.id) + '">' + jumpLabel + '</span>' +
          '</span>' +
          '</div>' +
          (n.sub ? '<span class="ltt-node-sub">' + escHtml(n.sub) + '</span>' : '');
        wrap.appendChild(btn);
      });
      sec.appendChild(wrap);
      treeEl.appendChild(sec);
    });
    rootEl.appendChild(treeEl);

    // Native Evidence Direct-Jump <dialog>
    var dialogEl = document.createElement('dialog');
    dialogEl.className = 'ltt-dialog';
    dialogEl.innerHTML =
      '<div class="ltt-dlg-card" data-ltt-dlg-card>' +
      '<div class="ltt-dlg-head">' +
      '<div>' +
      '<div class="ltt-dlg-kicker"><span data-ltt-dlg-stage></span><span>·</span><span class="ltt-rel-tag" style="display:inline-block;" data-ltt-dlg-rel></span></div>' +
      '<h3 class="ltt-dlg-title" data-ltt-dlg-title></h3>' +
      '</div>' +
      '<button type="button" class="ltt-dlg-close" data-ltt-dlg-close>ESC</button>' +
      '</div>' +
      '<div class="ltt-dlg-meta" data-ltt-dlg-meta></div>' +
      '<div class="ltt-dlg-bullets" data-ltt-dlg-bullets></div>' +
      '<div class="ltt-dlg-actions">' +
      '<div style="flex:1;min-width:220px;">' +
      '<div class="ltt-stage-meta" style="margin-bottom:4px;">ASSOCIATED · 关联判断（点击切换锁定）</div>' +
      '<div class="ltt-dlg-theses" data-ltt-dlg-theses></div>' +
      '</div>' +
      '<button type="button" class="ltt-dlg-open-btn" data-ltt-dlg-open style="display:none;">打开完整档案 ↗</button>' +
      '</div>' +
      '</div>';
    rootEl.appendChild(dialogEl);

    container.innerHTML = '';
    container.appendChild(rootEl);

    // Bind runtime state & interactions
    var items = Array.prototype.slice.call(treeEl.querySelectorAll('.ltt-item'));
    var itemMap = {};
    items.forEach(function (el) { itemMap[el.getAttribute('data-id')] = el; });
    var filterPills = Array.prototype.slice.call(headEl.querySelectorAll('[data-ltt-filter]'));
    var stagePills = Array.prototype.slice.call(headEl.querySelectorAll('[data-ltt-stage-link]'));
    var lockBadge = headEl.querySelector('.ltt-lock-badge');
    var lockText = headEl.querySelector('[data-ltt-lock-text]');

    var dlgCard = dialogEl.querySelector('[data-ltt-dlg-card]');
    var dlgStage = dialogEl.querySelector('[data-ltt-dlg-stage]');
    var dlgRel = dialogEl.querySelector('[data-ltt-dlg-rel]');
    var dlgTitle = dialogEl.querySelector('[data-ltt-dlg-title]');
    var dlgMeta = dialogEl.querySelector('[data-ltt-dlg-meta]');
    var dlgBullets = dialogEl.querySelector('[data-ltt-dlg-bullets]');
    var dlgTheses = dialogEl.querySelector('[data-ltt-dlg-theses]');
    var dlgOpenBtn = dialogEl.querySelector('[data-ltt-dlg-open]');
    var dlgCloseBtn = dialogEl.querySelector('[data-ltt-dlg-close]');

    var lockedId = null;
    var hoveredId = null;
    var activeFilter = 'all';

    function getEdgesFor(id) {
      if (!id || !itemMap[id]) return [];
      var isThesis = itemMap[id].getAttribute('data-kind') === 'thesis';
      var raw = data.edges.filter(function (e) {
        return isThesis ? e.thesis === id : e.target === id;
      });
      if (activeFilter === 'all') return raw;
      return raw.filter(function (e) { return e.rel === activeFilter; });
    }

    function clearSvg() {
      while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
    }

    function drawEdges(edges) {
      clearSvg();
      if (!edges.length) return;
      var treeRect = treeEl.getBoundingClientRect();
      var w = Math.max(1, Math.round(treeRect.width));
      var h = Math.max(1, Math.round(treeRect.height));
      svgEl.setAttribute('viewBox', '0 0 ' + w + ' ' + h);

      var ns = 'http://www.w3.org/2000/svg';
      var reducedMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      edges.forEach(function (edge, idx) {
        var tEl = itemMap[edge.thesis];
        var nEl = itemMap[edge.target];
        if (!tEl || !nEl) return;

        var r1 = tEl.getBoundingClientRect();
        var r2 = nEl.getBoundingClientRect();
        var x1 = r1.left + r1.width / 2 - treeRect.left;
        var y1 = r1.bottom - treeRect.top;
        var x2 = r2.left + r2.width / 2 - treeRect.left;
        var y2 = r2.top - treeRect.top;
        var ymid = (y1 + y2) / 2;

        var path = document.createElementNS(ns, 'path');
        path.setAttribute('d', 'M ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' C ' + x1.toFixed(1) + ' ' + ymid.toFixed(1) + ' ' + x2.toFixed(1) + ' ' + ymid.toFixed(1) + ' ' + x2.toFixed(1) + ' ' + y2.toFixed(1));
        path.setAttribute('class', 'ltt-edge-path ltt-edge-path--' + edge.rel);
        svgEl.appendChild(path);

        // CRITICAL: Never apply stroke-dasharray: pathLength on dashed/dotted lines!
        if (edge.rel === 'support') {
          if (!reducedMotion && typeof path.getTotalLength === 'function') {
            var len = path.getTotalLength();
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            path.style.transition = 'stroke-dashoffset 280ms cubic-bezier(0.22, 1, 0.36, 1) ' + (idx * 22) + 'ms';
            requestAnimationFrame(function () { path.style.strokeDashoffset = '0'; });
          }
        } else {
          if (reducedMotion) {
            path.classList.add('is-visible');
          } else {
            path.style.transitionDelay = (idx * 22) + 'ms';
            requestAnimationFrame(function () { path.classList.add('is-visible'); });
          }
        }

        var dotColor = edge.rel === 'support' ? '#8b3a2b' : edge.rel === 'refute' ? '#234b5e' : '#7a7060';
        var dotTop = document.createElementNS(ns, 'circle');
        dotTop.setAttribute('cx', x1.toFixed(1));
        dotTop.setAttribute('cy', y1.toFixed(1));
        dotTop.setAttribute('r', '2.5');
        dotTop.setAttribute('fill', dotColor);
        svgEl.appendChild(dotTop);

        var dotBot = document.createElementNS(ns, 'circle');
        dotBot.setAttribute('cx', x2.toFixed(1));
        dotBot.setAttribute('cy', y2.toFixed(1));
        dotBot.setAttribute('r', edge.rel === 'support' ? '3' : '3.2');
        if (edge.rel === 'support') {
          dotBot.setAttribute('fill', dotColor);
        } else {
          dotBot.setAttribute('fill', '#f7f3e8');
          dotBot.setAttribute('stroke', dotColor);
          dotBot.setAttribute('stroke-width', '1.6');
        }
        svgEl.appendChild(dotBot);
      });
    }

    function applyState() {
      var activeId = lockedId || hoveredId;
      treeEl.classList.toggle('has-lock', Boolean(lockedId));

      if (lockBadge && lockText) {
        if (lockedId) {
          var lockedLabel = thesisMap[lockedId]
            ? lockedId + ' · ' + thesisMap[lockedId].title.slice(0, 14) + '…'
            : (nodeMap[lockedId] ? nodeMap[lockedId].title : lockedId);
          lockText.textContent = '已锁定 · ' + lockedLabel;
          lockBadge.classList.add('is-visible');
        } else {
          lockBadge.classList.remove('is-visible');
        }
      }

      items.forEach(function (el) {
        el.classList.remove('is-dimmed', 'is-active', 'is-root');
        el.removeAttribute('data-rel');
        el.removeAttribute('data-lit');
        el.setAttribute('aria-pressed', el.getAttribute('data-id') === lockedId ? 'true' : 'false');
        var tag = el.querySelector('[data-rel-label]');
        if (tag) tag.textContent = '';
      });

      if (!activeId) {
        clearSvg();
        return;
      }

      var activeEdges = getEdgesFor(activeId);
      var isRootThesis = itemMap[activeId].getAttribute('data-kind') === 'thesis';
      var litRelMap = {};
      activeEdges.forEach(function (e) {
        var otherId = isRootThesis ? e.target : e.thesis;
        litRelMap[otherId] = e.rel;
      });

      items.forEach(function (el) {
        var id = el.getAttribute('data-id');
        if (id === activeId) {
          el.classList.add('is-active', 'is-root');
          el.setAttribute('data-lit', 'true');
        } else if (litRelMap[id]) {
          var rel = litRelMap[id];
          el.classList.add('is-active');
          el.setAttribute('data-rel', rel);
          el.setAttribute('data-lit', 'true');
          var tag = el.querySelector('[data-rel-label]');
          if (tag) tag.textContent = relLabels[rel];
        } else {
          el.classList.add('is-dimmed');
        }
      });

      drawEdges(activeEdges);
    }

    function dispatchRoute(routeStr, nodeObj) {
      if (!routeStr) return;
      if (typeof opts.onOpenRoute === 'function') {
        opts.onOpenRoute(routeStr, nodeObj);
        return;
      }
      if (routeStr.indexOf('url:') === 0) {
        window.open(routeStr.slice(4), '_blank', 'noopener,noreferrer');
      } else if (routeStr.indexOf('href:') === 0) {
        window.open(routeStr.slice(5), '_blank', 'noopener,noreferrer');
      }
    }

    function openDocModal(targetId, preferThesisId) {
      var doc = data.docs[targetId];
      if (!doc) return;
      var nodeObj = nodeMap[targetId];
      var connected = data.edges.filter(function (e) { return e.target === targetId; });
      var primaryEdge = (preferThesisId && connected.filter(function (e) { return e.thesis === preferThesisId; })[0]) || connected[0];
      var primaryRel = primaryEdge ? primaryEdge.rel : 'support';

      dlgCard.setAttribute('data-rel', primaryRel);
      dlgStage.textContent = doc.stage || '';
      dlgRel.textContent = relLabels[primaryRel] || primaryRel;
      dlgRel.style.border = '1px solid';
      if (primaryRel === 'support') {
        dlgRel.style.color = '#8b3a2b';
        dlgRel.style.borderColor = 'rgba(139,58,43,0.32)';
        dlgRel.style.background = 'rgba(139,58,43,0.08)';
      } else if (primaryRel === 'refute') {
        dlgRel.style.color = '#234b5e';
        dlgRel.style.borderColor = 'rgba(35,75,94,0.32)';
        dlgRel.style.background = 'rgba(35,75,94,0.08)';
      } else {
        dlgRel.style.color = '#7a7060';
        dlgRel.style.borderColor = 'rgba(122,112,96,0.34)';
        dlgRel.style.background = 'rgba(122,112,96,0.10)';
      }

      dlgTitle.textContent = doc.title || (nodeObj ? nodeObj.title : targetId);
      dlgMeta.innerHTML = '';

      function addMetaRow(k, v, url) {
        if (!v && !url) return;
        var row = document.createElement('div');
        var ks = document.createElement('span');
        ks.className = 'ltt-dlg-meta-k';
        ks.textContent = k + ': ';
        row.appendChild(ks);
        if (url) {
          var a = document.createElement('a');
          a.href = url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.style.color = '#8b3a2b';
          a.textContent = (v || url) + ' ↗';
          row.appendChild(a);
        } else {
          var vs = document.createElement('span');
          vs.textContent = v;
          row.appendChild(vs);
        }
        dlgMeta.appendChild(row);
      }

      addMetaRow('SOURCE', doc.sourceLabel || doc.route, doc.sourceUrl);
      addMetaRow('VERSION', doc.version, null);
      addMetaRow('CALIBER & SCOPE', doc.caliber, null);
      addMetaRow('DELTA vs BASELINE', doc.delta, null);

      dlgBullets.innerHTML = '';
      (doc.bullets || []).forEach(function (line) {
        var p = document.createElement('p');
        p.className = 'ltt-dlg-bullet';
        p.textContent = line;
        dlgBullets.appendChild(p);
      });

      dlgTheses.innerHTML = '';
      connected.forEach(function (edge) {
        var tObj = thesisMap[edge.thesis];
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'ltt-dlg-chip';
        var color = edge.rel === 'support' ? '#8b3a2b' : edge.rel === 'refute' ? '#234b5e' : '#7a7060';
        chip.innerHTML =
          '<span style="font-family:ui-monospace,monospace;font-size:10px;font-weight:700;color:' + color + ';">[' + escHtml(relLabels[edge.rel]) + ']</span>' +
          '<span>' + escHtml(edge.thesis + ' · ' + (tObj ? tObj.title : '')) + '</span>';
        chip.addEventListener('click', function () {
          if (typeof dialogEl.close === 'function' && dialogEl.open) dialogEl.close();
          lockedId = edge.thesis;
          hoveredId = null;
          applyState();
        });
        dlgTheses.appendChild(chip);
      });

      var resolvedRoute = (nodeObj && nodeObj.route) || doc.route || (doc.sourceUrl ? 'url:' + doc.sourceUrl : '');
      if (resolvedRoute) {
        dlgOpenBtn.style.display = 'inline-flex';
        dlgOpenBtn.onclick = function () {
          if (typeof dialogEl.close === 'function' && dialogEl.open) dialogEl.close();
          dispatchRoute(resolvedRoute, nodeObj);
        };
      } else {
        dlgOpenBtn.style.display = 'none';
        dlgOpenBtn.onclick = null;
      }

      if (typeof dialogEl.showModal === 'function') {
        dialogEl.showModal();
      }
    }

    items.forEach(function (el) {
      var id = el.getAttribute('data-id');
      el.addEventListener('mouseenter', function () {
        if (lockedId) return;
        hoveredId = id;
        applyState();
      });
      el.addEventListener('mouseleave', function () {
        if (lockedId) return;
        if (hoveredId === id) { hoveredId = null; applyState(); }
      });
      el.addEventListener('focus', function () {
        if (lockedId) return;
        hoveredId = id;
        applyState();
      });
      el.addEventListener('blur', function () {
        if (lockedId) return;
        if (hoveredId === id) { hoveredId = null; applyState(); }
      });
      el.addEventListener('click', function (evt) {
        evt.stopPropagation();
        var jump = evt.target && evt.target.closest ? evt.target.closest('[data-open-id]') : null;
        if (jump) {
          var prefer = lockedId && itemMap[lockedId] && itemMap[lockedId].getAttribute('data-kind') === 'thesis' ? lockedId : null;
          openDocModal(jump.getAttribute('data-open-id'), prefer);
          return;
        }
        if (
          lockedId &&
          lockedId !== id &&
          itemMap[lockedId] &&
          itemMap[lockedId].getAttribute('data-kind') === 'thesis' &&
          el.getAttribute('data-kind') !== 'thesis' &&
          el.getAttribute('data-lit') === 'true'
        ) {
          openDocModal(id, lockedId);
          return;
        }
        lockedId = lockedId === id ? null : id;
        hoveredId = null;
        applyState();
      });
    });

    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function (evt) {
        evt.stopPropagation();
        activeFilter = pill.getAttribute('data-ltt-filter') || 'all';
        filterPills.forEach(function (p) {
          p.classList.toggle('is-selected', p.getAttribute('data-ltt-filter') === activeFilter);
        });
        applyState();
      });
    });

    stagePills.forEach(function (pill) {
      var targetSec = rootEl.querySelector('#' + pill.getAttribute('data-ltt-stage-link'));
      if (!targetSec) return;
      pill.addEventListener('mouseenter', function () {
        pill.classList.add('is-hovered');
        targetSec.classList.add('is-stage-hover');
      });
      pill.addEventListener('mouseleave', function () {
        pill.classList.remove('is-hovered');
        targetSec.classList.remove('is-stage-hover');
      });
      pill.addEventListener('click', function (evt) {
        evt.stopPropagation();
        if (typeof targetSec.scrollIntoView === 'function') {
          targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        targetSec.classList.add('is-stage-hover');
        setTimeout(function () { targetSec.classList.remove('is-stage-hover'); }, 1100);
      });
    });

    if (lockBadge) {
      lockBadge.addEventListener('click', function (evt) {
        evt.stopPropagation();
        lockedId = null;
        applyState();
      });
    }

    function onDocClick(evt) {
      if (!lockedId || dialogEl.open) return;
      if (evt.target && evt.target.closest && !evt.target.closest('.ltt-item')) {
        lockedId = null;
        applyState();
      }
    }
    function onDocKeydown(evt) {
      if (evt.key === 'Escape' && !dialogEl.open && lockedId) {
        lockedId = null;
        applyState();
      }
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onDocKeydown);

    dlgCloseBtn.addEventListener('click', function () {
      if (typeof dialogEl.close === 'function') dialogEl.close();
    });
    dialogEl.addEventListener('click', function (evt) {
      if (evt.target === dialogEl && typeof dialogEl.close === 'function') dialogEl.close();
    });

    var rafPending = false;
    function scheduleRedraw() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        rafPending = false;
        var activeId = lockedId || hoveredId;
        if (activeId) drawEdges(getEdgesFor(activeId));
      });
    }

    var ro = null;
    if (typeof ResizeObserver === 'function') {
      ro = new ResizeObserver(scheduleRedraw);
      ro.observe(treeEl);
    }
    window.addEventListener('resize', scheduleRedraw);

    return {
      lock: function (id) {
        if (!itemMap[id]) return;
        lockedId = id;
        hoveredId = null;
        applyState();
      },
      unlock: function () {
        lockedId = null;
        hoveredId = null;
        applyState();
      },
      openDoc: function (id) {
        openDocModal(id, lockedId);
      },
      destroy: function () {
        if (ro) ro.disconnect();
        window.removeEventListener('resize', scheduleRedraw);
        document.removeEventListener('click', onDocClick);
        document.removeEventListener('keydown', onDocKeydown);
        container.innerHTML = '';
      },
    };
  }

  return {
    mount: mount,
    validateSchema: validateSchema,
  };
});

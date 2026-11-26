(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TopicBubbles = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function escHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mountTopicBubbles(opts) {
    var cfg = opts || {};
    var tl = cfg.topicLandscape || {};
    var buckets = Array.isArray(tl.buckets) ? tl.buckets : [];
    var topicEdges = Array.isArray(tl.edges) ? tl.edges : [];
    var bubbleSvg = cfg.svgEl;
    if (!bubbleSvg || buckets.length === 0) {
      return { clear: function () {}, selectBucket: function () {}, selectEdge: function () {} };
    }

    var propStrip = cfg.propStripEl || null;
    var topicDrawer = cfg.drawerEl || null;
    var topicTip = cfg.tooltipEl || null;
    var mode = cfg.mode === 'portal' ? 'portal' : 'sector';
    var sectorUrl = String(cfg.sectorUrl || '').replace(/#.*$/, '');
    var onOpenBlog = typeof cfg.onOpenBlog === 'function' ? cfg.onOpenBlog : null;
    var onInspectChange = typeof cfg.onInspectChange === 'function' ? cfg.onInspectChange : null;

    var bucketById = new Map(buckets.map(function (bk) { return [bk.id, bk]; }));
    var topicEdgeById = new Map(topicEdges.map(function (e) { return [e.id, e]; }));
    var blogMetaByFile = new Map();
    buckets.forEach(function (bk) {
      (bk.blogs || []).forEach(function (b) {
        blogMetaByFile.set(b.rawFile, Object.assign({}, b, { primaryLabel: bk.label, primaryId: bk.id }));
      });
    });

    var selectedTopicId = null;
    var selectedTopicEdgeId = null;

    function resolveArticleHref(b) {
      var hash = (b && b.deepHash) ? String(b.deepHash) : ('#blog=' + encodeURIComponent((b && b.rawFile) || ''));
      if (mode === 'portal' && sectorUrl && hash.charAt(0) === '#') {
        return sectorUrl + hash;
      }
      return hash;
    }

    function articleLinkAttrs(b) {
      var href = escHtml(resolveArticleHref(b));
      if (mode === 'portal') {
        return 'href="' + href + '"';
      }
      return 'href="' + href + '" data-open-blog="' + escHtml(b.rawFile || '') + '"';
    }

    function wireArticleClicks(containerEl) {
      if (!containerEl || mode === 'portal' || !onOpenBlog) return;
      containerEl.querySelectorAll('[data-open-blog]').forEach(function (aEl) {
        aEl.addEventListener('click', function (ev) {
          var rf = aEl.getAttribute('data-open-blog');
          if (!rf) return;
          ev.preventDefault();
          onOpenBlog(rf);
        });
      });
    }

    function renderPortalBucketDrawer(bk) {
      var incEdges = topicEdges
        .filter(function (e) { return e.fromId === bk.id || e.toId === bk.id; })
        .sort(function (a, b) { return b.totalLinks - a.totalLinks; });
      var incHtml = incEdges.length > 0
        ? '<div class="pnp-subhead">跨界联系</div><div class="pnp-edge-chips">'
          + incEdges.map(function (e) {
            var otherLabel = e.fromId === bk.id ? e.toLabel : e.fromLabel;
            return '<button type="button" class="pnp-edge-chip" data-open-tedge="' + escHtml(e.id) + '">'
              + '↔ ' + escHtml(otherLabel) + ' <span>(' + e.totalLinks + ')</span></button>';
          }).join('')
          + '</div>'
        : '';
      var artsHtml = (bk.blogs || []).map(function (b) {
        var secTags = (b.secondaryTopics || []).map(function (st) {
          return '<span class="topic-sec-chip">+ ' + escHtml(st) + '</span>';
        }).join('');
        return '<div class="pnp-art-row">'
          + '<div class="pnp-art-meta">' + escHtml(b.date) + (b.source ? ' · ' + escHtml(b.source) : '') + '</div>'
          + '<div class="pnp-art-ttl"><a ' + articleLinkAttrs(b) + '>' + escHtml(b.title) + '</a>' + secTags + '</div>'
          + (b.summary ? '<div class="pnp-art-sum">' + escHtml(b.summary) + '</div>' : '')
          + '</div>';
      }).join('') || '<p class="pnp-det-body">暂无归属文章</p>';

      var jumpHref = sectorUrl ? (sectorUrl + '#sec-landscape') : '#sec-landscape';
      topicDrawer.innerHTML =
        '<div class="pnp-head">'
        + '<div class="pnp-meta"><span class="pnp-id">主题归属</span><span>' + bk.count + ' 篇 · ' + bk.pct + '%</span></div>'
        + '<div class="pnp-head-actions"><a href="' + escHtml(jumpHref) + '">在赛道中查看 ↗</a>'
        + '<button type="button" class="pnp-close" id="topic-drawer-close">收起 ×</button></div>'
        + '</div>'
        + '<h3 class="pnp-title">' + escHtml(bk.label) + '</h3>'
        + (bk.criteria ? '<p class="pnp-det-body" style="margin-bottom:10px;">' + escHtml(bk.criteria) + '</p>' : '')
        + incHtml
        + '<div class="pnp-subhead">相关导读（' + bk.blogs.length + '）</div>'
        + '<div class="pnp-art-list">' + artsHtml + '</div>';
    }

    function renderPortalEdgeDrawer(edge) {
      var cooccurHtml = (edge.cooccurFiles || []).map(function (cf) {
        var b = blogMetaByFile.get(cf.rawFile);
        if (!b) return '';
        var fromLbl = (bucketById.get(cf.fromBucketId) || {}).label || '';
        var toLbl = (bucketById.get(cf.toBucketId) || {}).label || '';
        return '<div class="pnp-art-row">'
          + '<div class="pnp-art-meta">' + escHtml(b.date) + ' · ' + escHtml(fromLbl) + ' → +' + escHtml(toLbl) + '</div>'
          + '<div class="pnp-art-ttl"><a ' + articleLinkAttrs(b) + '>' + escHtml(b.title) + '</a></div>'
          + (b.summary ? '<div class="pnp-art-sum">' + escHtml(b.summary) + '</div>' : '')
          + '</div>';
      }).filter(Boolean).join('');

      var citeHtml = (edge.citePairs || []).map(function (cp) {
        var src = blogMetaByFile.get(cp.fromFile);
        var dst = blogMetaByFile.get(cp.toFile);
        if (!src || !dst) return '';
        return '<div class="pnp-art-row">'
          + '<div class="pnp-art-meta">' + escHtml(src.date) + ' · ' + escHtml(src.primaryLabel) + '</div>'
          + '<div class="pnp-art-ttl"><a ' + articleLinkAttrs(src) + '>' + escHtml(src.title) + '</a></div>'
          + '<div class="pnp-art-sum">→ 引用 → <a ' + articleLinkAttrs(dst) + ' style="color:var(--accent);">' + escHtml(dst.title) + '</a></div>'
          + '</div>';
      }).filter(Boolean).join('');

      var jumpHref = sectorUrl ? (sectorUrl + '#sec-landscape') : '#sec-landscape';
      topicDrawer.innerHTML =
        '<div class="pnp-head">'
        + '<div class="pnp-meta"><span class="pnp-id">跨界关联</span><span>' + edge.totalLinks + ' 条联系 · ' + edge.articleCount + ' 篇涉及</span></div>'
        + '<div class="pnp-head-actions"><a href="' + escHtml(jumpHref) + '">在赛道中查看 ↗</a>'
        + '<button type="button" class="pnp-close" id="topic-drawer-close">收起 ×</button></div>'
        + '</div>'
        + '<h3 class="pnp-title">' + escHtml(edge.fromLabel) + ' ↔ ' + escHtml(edge.toLabel) + '</h3>'
        + '<p class="pnp-det-body" style="margin-bottom:10px;">Decision-1 主次主题共现 ' + edge.cooccurCount + ' 篇 · 导读正文互引 ' + edge.citeCount + ' 条</p>'
        + (cooccurHtml ? '<div class="pnp-subhead">主次主题共现（' + edge.cooccurCount + ' 篇）</div><div class="pnp-art-list">' + cooccurHtml + '</div>' : '')
        + (citeHtml ? '<div class="pnp-subhead">导读正文跨桶互引（' + edge.citeCount + ' 条）</div><div class="pnp-art-list">' + citeHtml + '</div>' : '');
    }

    function renderTopicDrawer(bk) {
      if (!topicDrawer) {
        if (onInspectChange) onInspectChange(bk ? { kind: 'bucket', item: bk } : null);
        return;
      }
      if (!bk) {
        topicDrawer.classList.remove('open');
        topicDrawer.innerHTML = '';
        if (onInspectChange) onInspectChange(null);
        return;
      }
      if (mode === 'portal') {
        renderPortalBucketDrawer(bk);
      } else {
        var incEdges = topicEdges
          .filter(function (e) { return e.fromId === bk.id || e.toId === bk.id; })
          .sort(function (a, b) { return b.totalLinks - a.totalLinks; });
        var incChipsHtml = incEdges.length > 0
          ? '<div class="edge-chip-bar">'
            + '<span class="muted" style="font-size:12px;align-self:center;">跨界联系：</span>'
            + incEdges.map(function (e) {
              var otherLabel = e.fromId === bk.id ? e.toLabel : e.fromLabel;
              return '<button type="button" class="hub-pill" data-open-tedge="' + escHtml(e.id) + '">↔ ' + escHtml(otherLabel) + ' <span class="muted">(' + e.totalLinks + ' · ' + e.cooccurCount + '共现/' + e.citeCount + '互引)</span></button>';
            }).join('')
            + '</div>'
          : '';
        var rowsHtml = (bk.blogs || []).map(function (b) {
          var secTags = (b.secondaryTopics || []).map(function (st) {
            return '<span class="topic-sec-chip">+ ' + escHtml(st) + '</span>';
          }).join('');
          return '<tr>'
            + '<td class="mono-col">' + escHtml(b.date) + '</td>'
            + '<td>'
            + '<a class="row-link" ' + articleLinkAttrs(b) + '>' + escHtml(b.title) + '</a>' + secTags
            + (b.summary ? '<div class="muted" style="margin-top:2px;">' + escHtml(b.summary) + '</div>' : '')
            + '</td>'
            + '<td class="muted src-col" title="' + escHtml(b.source) + '">' + escHtml(b.source) + '</td>'
            + '</tr>';
        }).join('');
        topicDrawer.innerHTML =
          '<div class="drawer-head">'
          + '<div>'
          + '<h3 class="drawer-title">' + escHtml(bk.label) + '（' + bk.count + ' 篇 · ' + bk.pct + '%）</h3>'
          + '<div class="drawer-sub">' + escHtml(bk.criteria || '') + '</div>'
          + '</div>'
          + '<button type="button" class="btn-secondary" id="topic-drawer-close">收起列表</button>'
          + '</div>'
          + incChipsHtml
          + '<div style="overflow-x:auto;max-height:420px;overflow-y:auto;">'
          + '<table class="notebook-table"><tbody>' + (rowsHtml || '<tr><td class="muted">暂无归属文章</td></tr>') + '</tbody></table>'
          + '</div>';
      }
      topicDrawer.classList.add('open');
      if (onInspectChange) onInspectChange({ kind: 'bucket', item: bk });
      var closeBtn = topicDrawer.querySelector('#topic-drawer-close');
      if (closeBtn) closeBtn.addEventListener('click', function () { selectTopicBucket(null); });
      topicDrawer.querySelectorAll('[data-open-tedge]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          selectTopicEdge(btn.getAttribute('data-open-tedge'));
        });
      });
      wireArticleClicks(topicDrawer);
    }

    function renderTopicEdgeDrawer(edge) {
      if (!topicDrawer) {
        if (onInspectChange) onInspectChange(edge ? { kind: 'edge', item: edge } : null);
        return;
      }
      if (!edge) {
        topicDrawer.classList.remove('open');
        topicDrawer.innerHTML = '';
        if (onInspectChange) onInspectChange(null);
        return;
      }
      if (mode === 'portal') {
        renderPortalEdgeDrawer(edge);
      } else {
        var cooccurRows = (edge.cooccurFiles || []).map(function (cf) {
          var b = blogMetaByFile.get(cf.rawFile);
          if (!b) return '';
          var fromLbl = (bucketById.get(cf.fromBucketId) || {}).label || '';
          var toLbl = (bucketById.get(cf.toBucketId) || {}).label || '';
          return '<tr>'
            + '<td class="mono-col">' + escHtml(b.date) + '</td>'
            + '<td>'
            + '<a class="row-link" ' + articleLinkAttrs(b) + '>' + escHtml(b.title) + '</a>'
            + '<span class="topic-sec-chip">' + escHtml(fromLbl) + ' → +' + escHtml(toLbl) + '</span>'
            + (b.summary ? '<div class="muted" style="margin-top:2px;">' + escHtml(b.summary) + '</div>' : '')
            + '</td>'
            + '<td class="muted src-col" title="' + escHtml(b.source) + '">' + escHtml(b.source) + '</td>'
            + '</tr>';
        }).filter(Boolean).join('');

        var citeRows = (edge.citePairs || []).map(function (cp) {
          var src = blogMetaByFile.get(cp.fromFile);
          var dst = blogMetaByFile.get(cp.toFile);
          if (!src || !dst) return '';
          return '<tr>'
            + '<td class="mono-col">' + escHtml(src.date) + '</td>'
            + '<td>'
            + '<div>'
            + '<a class="row-link" ' + articleLinkAttrs(src) + '>' + escHtml(src.title) + '</a>'
            + '<span class="topic-sec-chip">' + escHtml(src.primaryLabel) + '</span>'
            + '</div>'
            + '<div class="muted" style="margin-top:3px;">'
            + '→ 引用 → '
            + '<a class="row-link" ' + articleLinkAttrs(dst) + ' style="color:var(--accent);">' + escHtml(dst.title) + '</a>'
            + '<span class="topic-sec-chip">' + escHtml(dst.primaryLabel) + '</span>'
            + '</div>'
            + '</td>'
            + '<td class="muted src-col" title="' + escHtml(src.source) + '">' + escHtml(src.source) + '</td>'
            + '</tr>';
        }).filter(Boolean).join('');

        topicDrawer.innerHTML =
          '<div class="drawer-head">'
          + '<div>'
          + '<h3 class="drawer-title">' + escHtml(edge.fromLabel) + ' ↔ ' + escHtml(edge.toLabel) + '（' + edge.totalLinks + ' 条联系 · ' + edge.articleCount + ' 篇涉及）</h3>'
          + '<div class="drawer-sub">Decision-1 主次主题共现 ' + edge.cooccurCount + ' 篇 · 导读正文互引 ' + edge.citeCount + ' 条</div>'
          + '</div>'
          + '<button type="button" class="btn-secondary" id="topic-drawer-close">收起列表</button>'
          + '</div>'
          + '<div style="overflow-x:auto;max-height:420px;overflow-y:auto;">'
          + (cooccurRows ? '<div class="edge-drawer-sec-title">主次主题共现（' + edge.cooccurCount + ' 篇）</div><table class="notebook-table"><tbody>' + cooccurRows + '</tbody></table>' : '')
          + (citeRows ? '<div class="edge-drawer-sec-title">导读正文跨桶互引（' + edge.citeCount + ' 条）</div><table class="notebook-table"><tbody>' + citeRows + '</tbody></table>' : '')
          + '</div>';
      }
      topicDrawer.classList.add('open');
      if (onInspectChange) onInspectChange({ kind: 'edge', item: edge });
      var closeBtn = topicDrawer.querySelector('#topic-drawer-close');
      if (closeBtn) closeBtn.addEventListener('click', function () { selectTopicEdge(null); });
      wireArticleClicks(topicDrawer);
    }

    function applyLandscapeHighlight() {
      if (propStrip) {
        propStrip.querySelectorAll('.topic-prop-pill').forEach(function (p) {
          p.classList.toggle('active', Boolean(selectedTopicId && p.getAttribute('data-tid') === selectedTopicId));
        });
      }
      var edgeObj = selectedTopicEdgeId ? topicEdgeById.get(selectedTopicEdgeId) : null;
      var nbrSet = new Set();
      if (selectedTopicId) {
        topicEdges.forEach(function (e) {
          if (e.fromId === selectedTopicId) nbrSet.add(e.toId);
          if (e.toId === selectedTopicId) nbrSet.add(e.fromId);
        });
      } else if (edgeObj) {
        nbrSet.add(edgeObj.fromId);
        nbrSet.add(edgeObj.toId);
      }

      bubbleSvg.querySelectorAll('.topic-bubble-group').forEach(function (g) {
        var gid = g.getAttribute('data-tid');
        var isSel = Boolean(selectedTopicId && gid === selectedTopicId);
        var isNbr = Boolean((selectedTopicId || edgeObj) && nbrSet.has(gid));
        var isDim = Boolean((selectedTopicId && !isSel && !isNbr) || (edgeObj && !isNbr));
        g.classList.toggle('is-selected', isSel);
        g.classList.toggle('is-neighbor', isNbr);
        g.classList.toggle('is-dimmed', isDim);
      });
      bubbleSvg.querySelectorAll('.topic-edge-g, .topic-edge-badge-g').forEach(function (el) {
        var eid = el.getAttribute('data-eid');
        var fr = el.getAttribute('data-from');
        var to = el.getAttribute('data-to');
        var isSel = Boolean(selectedTopicEdgeId && eid === selectedTopicEdgeId);
        var isLit = Boolean(selectedTopicId && (fr === selectedTopicId || to === selectedTopicId));
        var isDim = Boolean((selectedTopicEdgeId && !isSel) || (selectedTopicId && !isLit));
        el.classList.toggle('is-selected', isSel);
        el.classList.toggle('is-lit', isLit);
        el.classList.toggle('is-dimmed', isDim);
      });

      var litFiles = new Set();
      if (edgeObj) {
        (edgeObj.cooccurFiles || []).forEach(function (x) { litFiles.add(x.rawFile); });
        (edgeObj.citePairs || []).forEach(function (x) {
          litFiles.add(x.fromFile);
          litFiles.add(x.toFile);
        });
      }
      bubbleSvg.querySelectorAll('.topic-bubble-dot').forEach(function (dot) {
        if (!edgeObj) {
          dot.classList.remove('is-edge-lit', 'is-dimmed');
          return;
        }
        var f = dot.getAttribute('data-file') || '';
        var pId = dot.getAttribute('data-bid') || '';
        var inEndpoint = pId === edgeObj.fromId || pId === edgeObj.toId;
        var isLit = inEndpoint && litFiles.has(f);
        dot.classList.toggle('is-edge-lit', isLit);
        dot.classList.toggle('is-dimmed', inEndpoint && !isLit);
      });
    }

    function selectTopicBucket(bucketId) {
      selectedTopicEdgeId = null;
      selectedTopicId = (selectedTopicId === bucketId) ? null : bucketId;
      applyLandscapeHighlight();
      var bk = buckets.find(function (x) { return x.id === selectedTopicId; }) || null;
      renderTopicDrawer(bk);
    }

    function selectTopicEdge(edgeId) {
      selectedTopicId = null;
      selectedTopicEdgeId = (selectedTopicEdgeId === edgeId) ? null : edgeId;
      applyLandscapeHighlight();
      var edgeObj = selectedTopicEdgeId ? (topicEdgeById.get(selectedTopicEdgeId) || null) : null;
      renderTopicEdgeDrawer(edgeObj);
    }

    function clearSelection() {
      selectedTopicId = null;
      selectedTopicEdgeId = null;
      applyLandscapeHighlight();
      renderTopicDrawer(null);
    }

    var ordered = buckets.slice().sort(function (a, b) {
      if (a.isFallback !== b.isFallback) return a.isFallback ? 1 : -1;
      return b.count - a.count;
    });

    if (propStrip) {
      propStrip.innerHTML = ordered.map(function (bk) {
        return '<button type="button" class="topic-prop-pill' + (bk.isFallback ? ' is-fallback' : '') + '" data-tid="' + escHtml(bk.id) + '">'
          + '<span>' + escHtml(bk.label) + '</span>'
          + '<span class="topic-prop-cnt">' + bk.count + ' 篇 (' + bk.pct + '%)</span>'
          + '</button>';
      }).join('');
      propStrip.querySelectorAll('.topic-prop-pill').forEach(function (btn) {
        btn.addEventListener('click', function () {
          selectTopicBucket(btn.getAttribute('data-tid'));
        });
      });
    }

    var W = 960;
    var SIM_H = 600;
    function textWidthEst(s) {
      return Array.from(String(s || '')).reduce(function (acc, ch) {
        return acc + (ch.charCodeAt(0) > 127 ? 14 : 8);
      }, 0);
    }
    var maxCnt = Math.max.apply(null, [1].concat(ordered.map(function (b) { return b.count; })));
    var coreNodes = ordered.filter(function (bk) { return !bk.isFallback; });
    var fallbackNodes = ordered.filter(function (bk) { return bk.isFallback; });
    var anchorId = (coreNodes[0] || ordered[0]).id;
    var anchorAffMap = new Map();
    topicEdges.forEach(function (e) {
      if (e.fromId === anchorId) anchorAffMap.set(e.toId, e.forceAffinity || 0);
      if (e.toId === anchorId) anchorAffMap.set(e.fromId, e.forceAffinity || 0);
    });
    var ringNodes = coreNodes.slice(1).sort(function (a, b) {
      return ((anchorAffMap.get(b.id) || 0) - (anchorAffMap.get(a.id) || 0)) || (b.count - a.count);
    });

    var simNodes = [];
    ordered.forEach(function (bk) {
      var r = Math.round(Math.max(44, Math.min(112, Math.sqrt(Math.max(bk.count, 1) / maxCnt) * 94 + 22)));
      var labelW = Math.max(r * 1.4, textWidthEst(bk.label) + 18);
      var x = 480;
      var y = 270;
      if (bk.isFallback) {
        var fbIdx = fallbackNodes.findIndex(function (fn) { return fn.id === bk.id; });
        x = 810 - fbIdx * 120;
        y = 430;
      } else if (bk.id === anchorId) {
        x = 370;
        y = 235;
      } else {
        var idx = Math.max(0, ringNodes.findIndex(function (rn) { return rn.id === bk.id; }));
        var ang = -Math.PI * 0.45 + (idx / Math.max(1, ringNodes.length)) * Math.PI * 1.85;
        x = 485 + 265 * Math.cos(ang);
        y = 275 + 150 * Math.sin(ang);
      }
      simNodes.push({ id: bk.id, bk: bk, r: r, labelW: labelW, x: x, y: y });
    });
    var simById = new Map(simNodes.map(function (n) { return [n.id, n]; }));
    var maxForce = Math.max.apply(null, [0.01].concat(topicEdges.map(function (e) { return e.forceAffinity || 0; })));

    function clampSimNode(n) {
      var minX = Math.max(n.r + 18, n.labelW / 2 + 12);
      n.x = Math.max(minX, Math.min(W - minX, n.x));
      n.y = Math.max(n.r + 22, Math.min(SIM_H - n.r - 60, n.y));
    }

    function projectClearance(passes) {
      for (var p = 0; p < passes; p++) {
        for (var i = 0; i < simNodes.length; i++) {
          for (var j = i + 1; j < simNodes.length; j++) {
            var a = simNodes[i];
            var b = simNodes[j];
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var dist = Math.hypot(dx, dy) || 0.5;
            var minD = a.r + b.r + 52;
            if (dist < minD) {
              var push = (minD - dist) * 0.52 / dist;
              a.x -= dx * push;
              a.y -= dy * push;
              b.x += dx * push;
              b.y += dy * push;
            }
          }
        }
        for (var i2 = 0; i2 < simNodes.length; i2++) {
          for (var j2 = 0; j2 < simNodes.length; j2++) {
            if (i2 === j2) continue;
            var a2 = simNodes[i2];
            var b2 = simNodes[j2];
            var la = { x1: a2.x - a2.labelW / 2 - 8, x2: a2.x + a2.labelW / 2 + 8, y1: a2.y + a2.r + 2, y2: a2.y + a2.r + 56 };
            var cb = { x1: b2.x - b2.r - 18, x2: b2.x + b2.r + 18, y1: b2.y - b2.r - 18, y2: b2.y + b2.r + 18 };
            var ox = Math.min(la.x2, cb.x2) - Math.max(la.x1, cb.x1);
            var oy = Math.min(la.y2, cb.y2) - Math.max(la.y1, cb.y1);
            if (ox > 0 && oy > 0) {
              if (oy <= ox) {
                var dir = (a2.y + a2.r + 28) <= b2.y ? -1 : 1;
                a2.y += dir * oy * 0.52;
                b2.y -= dir * oy * 0.52;
              } else {
                var dirX = a2.x <= b2.x ? -1 : 1;
                a2.x += dirX * ox * 0.52;
                b2.x -= dirX * ox * 0.52;
              }
            }
            if (j2 > i2) {
              var lb = { x1: b2.x - b2.labelW / 2 - 8, x2: b2.x + b2.labelW / 2 + 8, y1: b2.y + b2.r + 2, y2: b2.y + b2.r + 56 };
              var lx = Math.min(la.x2, lb.x2) - Math.max(la.x1, lb.x1);
              var ly = Math.min(la.y2, lb.y2) - Math.max(la.y1, lb.y1);
              if (lx > 0 && ly > 0) {
                if (ly <= lx) {
                  var dirY2 = a2.y <= b2.y ? -1 : 1;
                  a2.y += dirY2 * ly * 0.52;
                  b2.y -= dirY2 * ly * 0.52;
                } else {
                  var dirX2 = a2.x <= b2.x ? -1 : 1;
                  a2.x += dirX2 * lx * 0.52;
                  b2.x -= dirX2 * lx * 0.52;
                }
              }
            }
          }
        }
        simNodes.forEach(clampSimNode);
      }
    }

    for (var step = 0; step < 220; step++) {
      topicEdges.forEach(function (e) {
        var a = simById.get(e.fromId);
        var b = simById.get(e.toId);
        if (!a || !b) return;
        var norm = Math.min(1, (e.forceAffinity || 0) / maxForce);
        var idealDist = a.r + b.r + 54 + (1 - norm) * 155;
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        var dist = Math.hypot(dx, dy) || 1;
        var delta = (dist - idealDist) / dist;
        var stiff = 0.036 * (0.3 + norm);
        a.x += dx * delta * stiff;
        a.y += dy * delta * stiff;
        b.x -= dx * delta * stiff;
        b.y -= dy * delta * stiff;
      });
      simNodes.forEach(function (n) {
        if (n.bk.isFallback) {
          n.x += (815 - n.x) * 0.014;
          n.y += (425 - n.y) * 0.014;
        } else {
          n.x += (465 - n.x) * 0.008;
          n.y += (265 - n.y) * 0.008;
        }
      });
      projectClearance(2);
    }
    projectClearance(36);

    var minY = Math.min.apply(null, simNodes.map(function (n) { return n.y - n.r; }));
    var maxY = Math.max.apply(null, simNodes.map(function (n) { return n.y + n.r + 54; }));
    var shiftY = 24 - minY;
    var totalSvgH = Math.max(400, Math.ceil((maxY - minY) + 46));
    var laidOut = simNodes.map(function (n) {
      return Object.assign({}, n, {
        cx: Math.round(n.x),
        cy: Math.round(n.y + shiftY),
      });
    });
    var posById = new Map(laidOut.map(function (n) { return [n.id, n]; }));
    bubbleSvg.setAttribute('viewBox', '0 0 960 ' + totalSvgH);

    var NS = 'http://www.w3.org/2000/svg';
    bubbleSvg.innerHTML = '';
    var edgesLayer = document.createElementNS(NS, 'g');
    edgesLayer.setAttribute('id', 'topic-edges-layer');
    var bubblesLayer = document.createElementNS(NS, 'g');
    bubblesLayer.setAttribute('id', 'topic-bubbles-layer');
    var badgesLayer = document.createElementNS(NS, 'g');
    badgesLayer.setAttribute('id', 'topic-edge-badges-layer');

    var placedBadgeBoxes = [];
    var placedMidPts = [];
    var circleObsBoxes = laidOut.map(function (n) {
      return { x1: n.cx - n.r - 4, x2: n.cx + n.r + 4, y1: n.cy - n.r - 4, y2: n.cy + n.r + 4 };
    });
    var labelObsBoxes = laidOut.map(function (n) {
      return { x1: n.cx - n.labelW / 2 - 6, x2: n.cx + n.labelW / 2 + 6, y1: n.cy + n.r + 2, y2: n.cy + n.r + 54 };
    });
    function boxOverlaps(b1, b2) {
      return !(b1.x2 <= b2.x1 || b1.x1 >= b2.x2 || b1.y2 <= b2.y1 || b1.y1 >= b2.y2);
    }

    function showEdgeTip(edge, bx, by) {
      if (!topicTip) return;
      topicTip.innerHTML = '<div>' + escHtml(edge.fromLabel) + ' ↔ ' + escHtml(edge.toLabel) + '</div>'
        + '<div class="muted">' + edge.totalLinks + ' 条关联（' + edge.cooccurCount + ' 主次共现 · ' + edge.citeCount + ' 正文互引）· ' + edge.articleCount + ' 篇 · 点击看跨界文章</div>';
      var wrapRect = bubbleSvg.getBoundingClientRect();
      topicTip.style.display = 'block';
      var px = Math.min(Math.max(10, wrapRect.width - 350), Math.max(10, (bx / 960) * wrapRect.width + 12));
      var py = Math.max(8, (by / totalSvgH) * wrapRect.height - 14);
      topicTip.style.left = px + 'px';
      topicTip.style.top = py + 'px';
    }
    function hideTip() {
      if (topicTip) topicTip.style.display = 'none';
    }

    var weakThreshold = Number(tl.weakLinkThreshold != null ? tl.weakLinkThreshold : 2);

    topicEdges.forEach(function (e, eIdx) {
      var a = posById.get(e.fromId);
      var b = posById.get(e.toId);
      if (!a || !b) return;
      var dx = b.cx - a.cx;
      var dy = b.cy - a.cy;
      var dist = Math.hypot(dx, dy) || 1;
      var ux = dx / dist;
      var uy = dy / dist;
      var mx = (a.cx + b.cx) / 2;
      var my = (a.cy + b.cy) / 2;
      var nx = -uy;
      var ny = ux;

      function buildTrimmedCurve(cb) {
        var cqx = mx + nx * cb;
        var cqy = my + ny * cb;
        var aqDx = cqx - a.cx;
        var aqDy = cqy - a.cy;
        var aqLen = Math.hypot(aqDx, aqDy) || 1;
        var csx = a.cx + (aqDx / aqLen) * (a.r + 4);
        var csy = a.cy + (aqDy / aqLen) * (a.r + 4);
        var qbDx = b.cx - cqx;
        var qbDy = b.cy - cqy;
        var qbLen = Math.hypot(qbDx, qbDy) || 1;
        var cex = b.cx - (qbDx / qbLen) * (b.r + 4);
        var cey = b.cy - (qbDy / qbLen) * (b.r + 4);
        return { sx: csx, sy: csy, qx: cqx, qy: cqy, ex: cex, ey: cey };
      }

      var signBias = eIdx % 2 === 0 ? 1 : -1;
      var candBends = [16 * signBias, -16 * signBias, 48 * signBias, -48 * signBias, 86 * signBias, -86 * signBias, 126 * signBias, -126 * signBias, 165 * signBias, -165 * signBias];
      var bestCurve = buildTrimmedCurve(candBends[0]);
      var bestScore = Infinity;
      var tsList = [0.1, 0.24, 0.38, 0.5, 0.62, 0.76, 0.9];
      for (var bi = 0; bi < candBends.length; bi++) {
        var cb = candBends[bi];
        var crv = buildTrimmedCurve(cb);
        var penalty = Math.abs(cb) * 0.08;
        if (crv.qx < 20 || crv.qx > 940 || crv.qy < 16 || crv.qy > totalSvgH - 16) penalty += 140;
        for (var ti = 0; ti < tsList.length; ti++) {
          var tS = tsList[ti];
          var omt = 1 - tS;
          var pxS = omt * omt * crv.sx + 2 * omt * tS * crv.qx + tS * tS * crv.ex;
          var pyS = omt * omt * crv.sy + 2 * omt * tS * crv.qy + tS * tS * crv.ey;
          if (pxS < 14 || pxS > 946 || pyS < 12 || pyS > totalSvgH - 12) penalty += 80;
          for (var ci = 0; ci < laidOut.length; ci++) {
            var c = laidOut[ci];
            if (c.id !== a.id && c.id !== b.id) {
              var cd = Math.hypot(pxS - c.cx, pyS - c.cy);
              if (cd < c.r + 14) penalty += (c.r + 14 - cd) * 4.5 + 110;
            }
            var lb = { x1: c.cx - c.labelW / 2 - 4, x2: c.cx + c.labelW / 2 + 4, y1: c.cy + c.r + 2, y2: c.cy + c.r + 54 };
            if (pxS >= lb.x1 && pxS <= lb.x2 && pyS >= lb.y1 && pyS <= lb.y2) penalty += 90;
          }
          if (tS === 0.5) {
            for (var pi = 0; pi < placedMidPts.length; pi++) {
              var pm = placedMidPts[pi];
              var md = Math.hypot(pxS - pm.x, pyS - pm.y);
              if (md < 34) penalty += (34 - md) * 1.4;
            }
          }
        }
        if (penalty < bestScore) {
          bestScore = penalty;
          bestCurve = crv;
        }
      }
      var sx = bestCurve.sx;
      var sy = bestCurve.sy;
      var qx = bestCurve.qx;
      var qy = bestCurve.qy;
      var ex = bestCurve.ex;
      var ey = bestCurve.ey;
      placedMidPts.push({ x: 0.25 * sx + 0.5 * qx + 0.25 * ex, y: 0.25 * sy + 0.5 * qy + 0.25 * ey });
      var pathD = 'M ' + sx.toFixed(1) + ' ' + sy.toFixed(1) + ' Q ' + qx.toFixed(1) + ' ' + qy.toFixed(1) + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1);

      var isWeak = weakThreshold > 0 && e.totalLinks <= weakThreshold;
      var sw = Math.max(1.1, Math.min(4.2, 1.0 + Math.sqrt(e.totalLinks) * 0.72));
      var baseOp = isWeak ? 0.18 : Math.min(0.56, 0.24 + ((e.forceAffinity || 0) / maxForce) * 0.34);

      var eg = document.createElementNS(NS, 'g');
      eg.setAttribute('class', 'topic-edge-g' + (isWeak ? ' is-weak' : ''));
      eg.setAttribute('data-eid', e.id);
      eg.setAttribute('data-from', e.fromId);
      eg.setAttribute('data-to', e.toId);

      var hit = document.createElementNS(NS, 'path');
      hit.setAttribute('class', 'topic-edge-hit');
      hit.setAttribute('d', pathD);
      var vis = document.createElementNS(NS, 'path');
      vis.setAttribute('class', 'topic-edge-path');
      vis.setAttribute('d', pathD);
      vis.style.strokeWidth = sw.toFixed(2) + 'px';
      vis.style.strokeOpacity = baseOp.toFixed(2);
      eg.appendChild(hit);
      eg.appendChild(vis);

      var badgeTxt = String(e.totalLinks);
      var bw = Math.max(22, badgeTxt.length * 8 + 12);
      var bh = 18;
      var bx = 0.25 * sx + 0.5 * qx + 0.25 * ex;
      var by = 0.25 * sy + 0.5 * qy + 0.25 * ey;
      var bestBadgeScore = Infinity;
      var tCands = [0.5, 0.36, 0.64, 0.22, 0.78, 0.14, 0.86];
      for (var tci = 0; tci < tCands.length; tci++) {
        var tCand = tCands[tci];
        var omtC = 1 - tCand;
        var cxC = omtC * omtC * sx + 2 * omtC * tCand * qx + tCand * tCand * ex;
        var cyC = omtC * omtC * sy + 2 * omtC * tCand * qy + tCand * tCand * ey;
        var cBox = { x1: cxC - bw / 2 - 2, x2: cxC + bw / 2 + 2, y1: cyC - bh / 2 - 2, y2: cyC + bh / 2 + 2 };
        var bScore = Math.abs(tCand - 0.5) * 12;
        if (labelObsBoxes.some(function (ob) { return boxOverlaps(cBox, ob); })) bScore += 2000;
        if (circleObsBoxes.some(function (ob) { return boxOverlaps(cBox, ob); })) bScore += 800;
        if (!isWeak && placedBadgeBoxes.some(function (ob) { return boxOverlaps(cBox, ob); })) bScore += 400;
        if (bScore < bestBadgeScore) {
          bestBadgeScore = bScore;
          bx = cxC;
          by = cyC;
        }
        if (bScore < 10) break;
      }
      if (!isWeak) {
        placedBadgeBoxes.push({ x1: bx - bw / 2 - 2, x2: bx + bw / 2 + 2, y1: by - bh / 2 - 2, y2: by + bh / 2 + 2 });
      }

      var bgG = document.createElementNS(NS, 'g');
      bgG.setAttribute('class', 'topic-edge-badge-g' + (isWeak ? ' is-weak' : ''));
      bgG.setAttribute('data-eid', e.id);
      bgG.setAttribute('data-from', e.fromId);
      bgG.setAttribute('data-to', e.toId);
      var rect = document.createElementNS(NS, 'rect');
      rect.setAttribute('class', 'topic-edge-badge-bg');
      rect.setAttribute('x', (bx - bw / 2).toFixed(1));
      rect.setAttribute('y', (by - bh / 2).toFixed(1));
      rect.setAttribute('width', String(bw));
      rect.setAttribute('height', String(bh));
      rect.setAttribute('rx', '9');
      var txt = document.createElementNS(NS, 'text');
      txt.setAttribute('class', 'topic-edge-badge-txt');
      txt.setAttribute('x', bx.toFixed(1));
      txt.setAttribute('y', (by + 4).toFixed(1));
      txt.setAttribute('text-anchor', 'middle');
      txt.textContent = badgeTxt;
      bgG.appendChild(rect);
      bgG.appendChild(txt);

      [eg, bgG].forEach(function (el) {
        el.addEventListener('click', function (ev) {
          ev.stopPropagation();
          selectTopicEdge(e.id);
        });
        el.addEventListener('mouseenter', function () {
          showEdgeTip(e, bx, by);
          if (!selectedTopicId && !selectedTopicEdgeId) {
            eg.classList.add('is-lit');
            bgG.classList.add('is-lit');
          }
        });
        el.addEventListener('mouseleave', function () {
          hideTip();
          if (!selectedTopicId && !selectedTopicEdgeId) {
            eg.classList.remove('is-lit');
            bgG.classList.remove('is-lit');
          }
        });
      });

      edgesLayer.appendChild(eg);
      badgesLayer.appendChild(bgG);
    });

    laidOut.forEach(function (item) {
      var bk = item.bk;
      var r = item.r;
      var cx = item.cx;
      var cy = item.cy;
      var g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'topic-bubble-group' + (bk.isFallback ? ' is-fallback' : ''));
      g.setAttribute('data-tid', bk.id);

      var circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('class', 'topic-bubble-circle');
      circle.setAttribute('cx', String(cx));
      circle.setAttribute('cy', String(cy));
      circle.setAttribute('r', String(r));
      g.appendChild(circle);

      g.addEventListener('click', function (ev) {
        ev.stopPropagation();
        if (ev.target && ev.target.closest('.topic-bubble-dot')) return;
        selectTopicBucket(bk.id);
      });

      var nDots = bk.blogs.length;
      var dotR = nDots > 40 ? 3.8 : nDots > 15 ? 4.6 : 5.6;
      var maxOrbit = Math.max(8, r - dotR - 10);
      var goldenAngle = Math.PI * (3 - Math.sqrt(5));
      var coreBlogs = [];
      var bridgeBlogs = [];
      bk.blogs.forEach(function (b) {
        if (Array.isArray(b.linkedBuckets) && b.linkedBuckets.length > 0) {
          bridgeBlogs.push(b);
        } else {
          coreBlogs.push(b);
        }
      });

      var dotPts = [];
      coreBlogs.forEach(function (b, ci) {
        var frac = coreBlogs.length <= 1 ? 0 : Math.sqrt((ci + 0.5) / coreBlogs.length);
        var rad = frac * maxOrbit * 0.72;
        var ang = ci * goldenAngle;
        dotPts.push({ b: b, dx: rad * Math.cos(ang), dy: rad * Math.sin(ang), isBridge: false });
      });

      var dirGroups = new Map();
      bridgeBlogs.forEach(function (b, bi) {
        var vx = 0;
        var vy = 0;
        var topTargetId = b.linkedBuckets[0].bucketId;
        var topWeight = -1;
        b.linkedBuckets.forEach(function (lk) {
          var targetNode = posById.get(lk.bucketId);
          if (!targetNode) return;
          var ddx = targetNode.cx - cx;
          var ddy = targetNode.cy - cy;
          var dlen = Math.hypot(ddx, ddy) || 1;
          var w = lk.kinds && lk.kinds.indexOf('cooccur') >= 0 ? 1.5 : 1.0;
          if (w > topWeight) {
            topWeight = w;
            topTargetId = lk.bucketId;
          }
          vx += (ddx / dlen) * w;
          vy += (ddy / dlen) * w;
        });
        var grp = dirGroups.get(topTargetId) || [];
        grp.push({ b: b, vx: vx, vy: vy, bi: bi });
        dirGroups.set(topTargetId, grp);
      });

      dirGroups.forEach(function (grp) {
        grp.forEach(function (it, rank) {
          var baseAng = (it.vx === 0 && it.vy === 0) ? (it.bi * goldenAngle) : Math.atan2(it.vy, it.vx);
          var angOffset = (rank - (grp.length - 1) / 2) * 0.19;
          var ang = baseAng + angOffset;
          var rad = maxOrbit * (0.64 + 0.28 * ((rank % 4) / 3));
          dotPts.push({ b: it.b, dx: rad * Math.cos(ang), dy: rad * Math.sin(ang), isBridge: true });
        });
      });

      var minDotD = dotR * 2.45;
      for (var stepD = 0; stepD < 26; stepD++) {
        for (var iD = 0; iD < dotPts.length; iD++) {
          for (var jD = iD + 1; jD < dotPts.length; jD++) {
            var p = dotPts[iD];
            var q = dotPts[jD];
            var ddx = q.dx - p.dx;
            var ddy = q.dy - p.dy;
            var dd = Math.hypot(ddx, ddy);
            if (dd < 0.01) {
              ddx = Math.cos(iD * 1.7 + jD);
              ddy = Math.sin(iD * 1.7 + jD);
              dd = 1;
            }
            if (dd < minDotD) {
              var push = (minDotD - dd) * 0.5 / dd;
              p.dx -= ddx * push;
              p.dy -= ddy * push;
              q.dx += ddx * push;
              q.dy += ddy * push;
            }
          }
        }
        dotPts.forEach(function (pt) {
          var d = Math.hypot(pt.dx, pt.dy);
          if (d > maxOrbit) {
            pt.dx = (pt.dx / d) * maxOrbit;
            pt.dy = (pt.dy / d) * maxOrbit;
          }
        });
      }

      dotPts.forEach(function (dp) {
        var b = dp.b;
        var dx = cx + dp.dx;
        var dy = cy + dp.dy;
        var dot = document.createElementNS(NS, 'circle');
        dot.setAttribute('class', 'topic-bubble-dot' + (dp.isBridge ? ' is-bridge' : ''));
        dot.setAttribute('data-file', b.rawFile || '');
        dot.setAttribute('data-bid', bk.id);
        dot.setAttribute('cx', dx.toFixed(1));
        dot.setAttribute('cy', dy.toFixed(1));
        dot.setAttribute('r', String(dotR));
        dot.addEventListener('click', function (ev) {
          ev.stopPropagation();
          if (onOpenBlog) {
            onOpenBlog(b.rawFile, b);
          } else if (mode === 'portal') {
            var href = resolveArticleHref(b);
            if (href && href !== '#' && typeof root.location !== 'undefined') {
              root.location.href = href;
            }
          }
        });
        dot.addEventListener('mouseenter', function () {
          if (!topicTip) return;
          var lkLabels = (b.linkedBuckets || [])
            .map(function (lk) { return (bucketById.get(lk.bucketId) || {}).label; })
            .filter(Boolean);
          var bridgeNote = lkLabels.length > 0 ? '<div>跨主题关联：' + escHtml(lkLabels.join('、')) + '</div>' : '';
          topicTip.innerHTML = '<div>' + escHtml(b.title) + '</div>' + bridgeNote
            + '<div class="muted">' + escHtml(b.date) + ' · ' + escHtml(b.source) + ' · 点击直开导读</div>';
          var wrapRect = bubbleSvg.getBoundingClientRect();
          topicTip.style.display = 'block';
          var px = Math.min(Math.max(10, wrapRect.width - 350), Math.max(10, (dx / 960) * wrapRect.width + 12));
          var py = Math.max(8, (dy / totalSvgH) * wrapRect.height - 14);
          topicTip.style.left = px + 'px';
          topicTip.style.top = py + 'px';
        });
        dot.addEventListener('mouseleave', hideTip);
        g.appendChild(dot);
      });

      var lbl = document.createElementNS(NS, 'text');
      lbl.setAttribute('class', 'topic-bubble-title');
      lbl.setAttribute('x', String(cx));
      lbl.setAttribute('y', String(cy + r + 20));
      lbl.setAttribute('text-anchor', 'middle');
      lbl.textContent = bk.label;
      g.appendChild(lbl);

      var meta = document.createElementNS(NS, 'text');
      meta.setAttribute('class', 'topic-bubble-meta');
      meta.setAttribute('x', String(cx));
      meta.setAttribute('y', String(cy + r + 38));
      meta.setAttribute('text-anchor', 'middle');
      meta.textContent = bk.count + ' 篇 · ' + bk.pct + '%';
      g.appendChild(meta);

      bubblesLayer.appendChild(g);
    });

    bubbleSvg.appendChild(edgesLayer);
    bubbleSvg.appendChild(bubblesLayer);
    bubbleSvg.appendChild(badgesLayer);

    bubbleSvg.addEventListener('click', function (ev) {
      if (ev.target === bubbleSvg && (selectedTopicId || selectedTopicEdgeId)) {
        clearSelection();
      }
    });

    return {
      clear: clearSelection,
      selectBucket: selectTopicBucket,
      selectEdge: selectTopicEdge,
    };
  }

  return {
    mount: mountTopicBubbles,
    escHtml: escHtml,
  };
});

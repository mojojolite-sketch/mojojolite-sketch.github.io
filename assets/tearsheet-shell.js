(() => {
  const root = document.documentElement;
  const saved = (() => {
    try { return localStorage.getItem('rw-theme') || 'pine'; } catch { return 'pine'; }
  })();
  root.dataset.theme = saved || 'pine';

  const syncThemeBtns = active => {
    document.querySelectorAll('.theme-switcher [data-set-theme]').forEach(btn => {
      const on = btn.getAttribute('data-set-theme') === active;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  };
  syncThemeBtns(root.dataset.theme);

  document.addEventListener('click', ev => {
    const btn = ev.target.closest('.theme-switcher [data-set-theme]');
    if (!btn) return;
    const t = btn.getAttribute('data-set-theme') || 'pine';
    root.dataset.theme = t;
    try { localStorage.setItem('rw-theme', t); } catch {}
    syncThemeBtns(t);
  });

  if (window.self !== window.top) {
    document.body.classList.add('in-iframe');
  }

  const tocList = document.getElementById('ts-toc-list');
  const contentEl = document.querySelector('.md-render');
  if (tocList && contentEl) {
    const headings = Array.from(contentEl.querySelectorAll('h2, h3'));
    tocList.innerHTML = headings.map((h, idx) => {
      if (!h.id) h.id = 'ts-sec-' + idx;
      const isH3 = h.tagName.toLowerCase() === 'h3';
      const label = (h.textContent || '').replace(/\s+/g, ' ').trim();
      return `<li><a href="#${h.id}" class="reader-toc-link ${isH3 ? 'toc-h3' : 'toc-h2'}" data-ts-toc="${h.id}">${label.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))}</a></li>`;
    }).join('');
    tocList.addEventListener('click', ev => {
      const a = ev.target.closest('[data-ts-toc]');
      if (!a) return;
      ev.preventDefault();
      const target = document.getElementById(a.getAttribute('data-ts-toc'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();

// ═══════════════════════════════════════════════════════════
//  NAV.JS — Tab navigation, achievements, leaderboard  v5.0
//  English With Sebastian
//  v5: 5-tab bar, About Panel, lazy rendering, perf fixes
//  Exposes: window.goTab, window.goTabFn, window.checkAchs,
//           window.renderAchs, window.openLB, window.closeLB,
//           window.closeLBEv, window.openAboutPanel,
//           window.closeAboutPanel, window.closeAboutPanelEv
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Lazy-render flags ────────────────────────────────────
  // Grammar and Sounds are heavy — only render on first visit
  let _gramRendered  = false;
  let _pronRendered  = false;
  let _aboutRendered = false; // inside panel

  // ── Tab navigation ───────────────────────────────────────
  window.goTabFn = function (tab) {
    const btn = document.getElementById('bn-' + tab);
    if (btn) goTab(tab, btn);
  };

  function goTab(tab, btn) {
    if (window.SFX) { SFX.whoosh ? SFX.whoosh() : SFX.click(); }

    // Hide all main tabs (never hide quiz/lesson which live outside scroll)
    document.querySelectorAll('.tab:not(#tab-quiz):not(#tab-lesson):not(#tab-about)')
      .forEach(t => t.classList.remove('on'));

    // Update nav buttons + ARIA
    document.querySelectorAll('.bn').forEach(b => {
      b.classList.remove('on');
      b.setAttribute('aria-selected', 'false');
    });

    const tabEl = document.getElementById('tab-' + tab);
    if (tabEl) tabEl.classList.add('on');

    if (btn) {
      btn.classList.add('on');
      btn.setAttribute('aria-selected', 'true');
    }

    // FAB visibility
    const fab = document.getElementById('fabContainer');
    if (fab) fab.style.display = tab === 'home' ? 'flex' : 'none';

    // ── Lazy rendering ──────────────────────────────────────
    if (tab === 'grammar' && !_gramRendered && window.renderGram) {
      requestIdleOrNext(() => { window.renderGram(); _gramRendered = true; });
    }
    if (tab === 'sounds' && !_pronRendered && window.renderPron) {
      requestIdleOrNext(() => { window.renderPron(); _pronRendered = true; });
    }
  }

  // rAF fallback for requestIdleCallback
  function requestIdleOrNext(fn) {
    if (window.requestIdleCallback) {
      requestIdleCallback(fn, { timeout: 300 });
    } else {
      requestAnimationFrame(fn);
    }
  }

  // ── About Panel ──────────────────────────────────────────
  function openAboutPanel() {
    if (window.SFX) SFX.click();
    const overlay = document.getElementById('aboutPanelOverlay');
    if (!overlay) return;

    // Lazy-render about content on first open
    if (!_aboutRendered && window.renderAbout) {
      window.renderAbout('aboutPanelContent');
      _aboutRendered = true;
    }

    overlay.classList.add('on');
    document.body.style.overflow = 'hidden';
    // Trap focus in panel
    const panel = document.getElementById('aboutPanelBox');
    if (panel) {
      const focusable = panel.querySelectorAll('button, a, [tabindex="0"]');
      if (focusable.length) focusable[0].focus();
    }
  }

  function closeAboutPanel() {
    const overlay = document.getElementById('aboutPanelOverlay');
    if (overlay) overlay.classList.remove('on');
    document.body.style.overflow = '';
  }

  function closeAboutPanelEv(e) {
    if (e.target === document.getElementById('aboutPanelOverlay')) closeAboutPanel();
  }

  // Close panel on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('aboutPanelOverlay');
      if (overlay && overlay.classList.contains('on')) closeAboutPanel();
    }
  });

  // ── Achievements ─────────────────────────────────────────
  function checkAchs() {
    const u = window.getCU(); if (!u) return;
    let newAch = false;
    ACHS.forEach(a => {
      if (!u.achs.includes(a.id) && a.c(u)) {
        u.achs.push(a.id); newAch = true;
        const achName = window.currentLang === 'pt' ? a.namePt : a.name;
        if (window.showToast) showToast(`🏅 ${window.currentLang === 'pt' ? 'Conquista desbloqueada' : 'Achievement unlocked'}: ${achName}!`);
        if (window.SFX) SFX.ach();
        if (window.launchConfetti) launchConfetti();
        if (window.spawnEmojis) spawnEmojis('🏅', 5);
      }
    });
    if (newAch) window.saveCU(u);
  }

  function renderAchs(u) {
    const el = document.getElementById('achGrid');
    if (!el || !u) return;
    el.innerHTML = ACHS.map(a => {
      const lit  = u.achs.includes(a.id);
      const name = window.currentLang === 'pt' ? a.namePt : a.name;
      return `<div class="ach ${lit ? 'lit' : 'dim'}" title="${name}">
        <div class="ach-ic">${a.icon}</div>
        <div class="ach-nm ${lit ? 'lit' : ''}">${name}</div>
      </div>`;
    }).join('');
  }

  // ── Leaderboard ──────────────────────────────────────────
  function openLB() {
    const m = document.getElementById('lb-modal');
    if (m) { m.classList.add('on'); if (window.Leaderboard) Leaderboard.open(); }
  }
  function closeLB() {
    const m = document.getElementById('lb-modal');
    if (m) { m.classList.remove('on'); if (window.Leaderboard) Leaderboard.close(); }
  }
  function closeLBEv(e) {
    if (e.target === document.getElementById('lb-modal')) closeLB();
  }

  // ── Expose ───────────────────────────────────────────────
  window.goTab           = goTab;
  window.checkAchs       = checkAchs;
  window.renderAchs      = renderAchs;
  window.openLB          = openLB;
  window.closeLB         = closeLB;
  window.closeLBEv       = closeLBEv;
  window.openAboutPanel  = openAboutPanel;
  window.closeAboutPanel = closeAboutPanel;
  window.closeAboutPanelEv = closeAboutPanelEv;

}());

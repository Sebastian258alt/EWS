// ═══════════════════════════════════════════════════════════
//  NAV.JS — Tab navigation, achievements, leaderboard  v4.0
//  English With Sebastian
//  Extracted from app.js — edit here for nav changes.
//  Depends on: SFX (app.js), ACHS (data.js), window.Leaderboard
//  Exposes: window.goTab, window.goTabFn, window.checkAchs,
//           window.renderAchs, window.openLB, window.closeLB, window.closeLBEv,
//           window.toggleMenu, window.closeMenuEv
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Tab navigation ───────────────────────────────────────
  window.goTabFn = function (tab) {
    const btn = document.getElementById('bn-' + tab);
    if (btn) goTab(tab, btn);
  };

  function goTab(tab, btn) {
    // Step 2.3C: bottom-nav taps are a navigation intent too (Scenario A from
    // the 2.3B audit) — bump the same shared generation counter used by
    // lesson.js/quiz.js so a still-loading lesson/quiz from before this tap
    // can't silently hijack the screen once it resolves. Doesn't touch the
    // underlying lazy-loader cache/promise, only gates the stale UI callback.
    window.__EWS_UI_GEN = (window.__EWS_UI_GEN || 0) + 1;
    if (window.SFX) { SFX.whoosh ? SFX.whoosh() : SFX.click(); }
    document.querySelectorAll('.tab:not(#tab-quiz)').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
    const tabEl = document.getElementById('tab-' + tab);
    if (tabEl) tabEl.classList.add('on');
    if (btn) btn.classList.add('on');
    const fab = document.getElementById('fabContainer');
    if (fab) fab.style.display = tab === 'home' ? 'flex' : 'none';
    if (tab === 'grammar'  && window.renderGram)     window.renderGram();
    if (tab === 'sounds'   && window.renderPron)     window.renderPron();
    if (tab === 'settings' && window.renderSettings) window.renderSettings();
  }

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
  // leaderboard.js (~7.3KB) is loaded on-demand via window.EWSLoadFeature
  // (defined in index.html's inline loader) rather than eagerly in Phase 7.
  // The modal shows/hides immediately either way; Leaderboard.open() (which
  // does the actual Supabase fetch + render) runs as soon as the module
  // lands. If it's already loaded, this resolves instantly like before.
  function openLB() {
    const m = document.getElementById('lb-modal');
    if (m) m.classList.add('on');
    if (window.Leaderboard) { Leaderboard.open(); return; }
    if (typeof window.EWSLoadFeature !== 'function') return;
    window.EWSLoadFeature('leaderboard', 'js/leaderboard.js')
      .then(function () { if (window.Leaderboard) Leaderboard.open(); })
      .catch(function (err) {
        console.error('[EnglishFlow] Failed to load leaderboard.js:', err);
        if (typeof showToast === 'function') {
          const msg = typeof t === 'function' ? t('errorLoading') : 'Error loading: ';
          showToast(msg + 'Leaderboard');
        }
      });
  }
  function closeLB() {
    const m = document.getElementById('lb-modal');
    if (m) { m.classList.remove('on'); if (window.Leaderboard) Leaderboard.close(); }
  }
  function closeLBEv(e) {
    if (e.target === document.getElementById('lb-modal')) closeLB();
  }

  // ── Hamburger side menu ──────────────────────────────────
  function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    if (overlay) overlay.classList.toggle('on');
  }
  function closeMenuEv(e) {
    if (e.target === document.getElementById('menuOverlay')) toggleMenu();
  }

  // ── Expose ───────────────────────────────────────────────
  window.goTab      = goTab;
  window.checkAchs  = checkAchs;
  window.renderAchs = renderAchs;
  window.openLB     = openLB;
  window.closeLB    = closeLB;
  window.closeLBEv  = closeLBEv;
  window.toggleMenu  = toggleMenu;
  window.closeMenuEv = closeMenuEv;

}());

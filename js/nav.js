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
    if (window.SFX) { SFX.whoosh ? SFX.whoosh() : SFX.click(); }
    document.querySelectorAll('.tab:not(#tab-quiz)').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.bn').forEach(b => b.classList.remove('on'));
    const tabEl = document.getElementById('tab-' + tab);
    if (tabEl) tabEl.classList.add('on');
    if (btn) btn.classList.add('on');
    const fab = document.getElementById('fabContainer');
    if (fab) fab.style.display = tab === 'home' ? 'flex' : 'none';
    if (tab === 'prof'    && window.renderAbout) window.renderAbout();
    if (tab === 'grammar' && window.renderGram)  window.renderGram();
    if (tab === 'sounds'  && window.renderPron)  window.renderPron();
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

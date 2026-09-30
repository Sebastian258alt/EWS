// ═══════════════════════════════════════════════════════════
//  OVERLAYS.JS — Premium modal, search, toast, effects  v4.0
//  English With Sebastian
//  Extracted from app.js — edit here for overlay changes.
//  Depends on: SFX (app.js), window.t(), window.showToast
//  Exposes: window.openPM, window.closePM, window.showPmStep,
//           window.selectPlan, window.selectPayment,
//           window.copyPayNumber, window.openWhatsApp,
//           window.closeLU, window.openSrch, window.closeSrch,
//           window.closeSrchEv, window.doSearch,
//           window.showToast, window.showXPPop,
//           window.launchConfetti, window.spawnEmojis,
//           window.logoClick, window.mascotTalk
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Simple overlays ──────────────────────────────────────
  function closeLU()   { document.getElementById('luOverlay').classList.remove('on'); }
  function closeSrch() {
    document.getElementById('srchOverlay').classList.remove('on');
    document.getElementById('srchInput').value = '';
  }
  function closeSrchEv(e) { if (e.target === document.getElementById('srchOverlay')) closeSrch(); }

  function openSrch() {
    if (window.SFX) SFX.click();
    const overlay = document.getElementById('srchOverlay');
    if (!overlay) return;
    overlay.classList.add('on');
    setTimeout(() => {
      const input = document.getElementById('srchInput');
      if (input) { input.value = ''; input.focus(); doSearch(); }
    }, 50);
  }

  // ── Search ───────────────────────────────────────────────
  function doSearch() {
    if (!window.SEARCH_INDEX || window.SEARCH_INDEX.length === 0) {
      window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
    }
    const q  = document.getElementById('srchInput')?.value.toLowerCase().trim() || '';
    const el = document.getElementById('srchResults');
    if (!el) return;
    if (!q) { el.innerHTML = `<div class="srch-empty">${window.t ? t('searchEmpty') : 'Search something…'}</div>`; return; }
    const res = (window.SEARCH_INDEX || []).filter(r =>
      r.title.toLowerCase().includes(q) || r.sub.toLowerCase().includes(q)
    ).slice(0, 12);
    if (!res.length) { el.innerHTML = `<div class="srch-empty">${window.t ? t('searchNone') : 'No results'}</div>`; return; }
    el.innerHTML = res.map((r, i) =>
      `<div class="srch-item" id="sri-${i}">
        <div class="srch-item-icon">${r.icon}</div>
        <div><div class="srch-item-title">${r.title}</div><div class="srch-item-sub">${r.sub}</div></div>
        <span class="srch-tag" style="background:${r.tagColor}22;color:${r.tagColor}">${r.tag}</span>
      </div>`
    ).join('');
    res.forEach((r, i) => {
      const elItem = document.getElementById('sri-' + i);
      if (elItem) elItem.onclick = () => { if (window.SFX) SFX.click(); closeSrch(); if (typeof r.action === 'function') r.action(); };
    });
  }

  // ── Toast & effects ──────────────────────────────────────
  let toastTimer;
  function showToast(msg) {
    clearTimeout(toastTimer);
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg; el.classList.add('show');
    toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  }

  function showXPPop(msg) {
    const p = document.getElementById('xppop');
    if (!p) return;
    p.textContent = msg; p.className = 'xppop';
    void p.offsetWidth; p.className = 'xppop go';
  }

  function launchConfetti() {
    const colors = ['#ff4081','#ffd740','#00e676','#2979ff','#1de9b6','#bc8cff'];
    for (let i = 0; i < 22; i++) {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `left:${Math.random()*100}%;top:-10px;width:${Math.random()*8+4}px;height:${Math.random()*8+4}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-delay:${Math.random()}s;animation-duration:${1.2+Math.random()*.8}s;`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2200);
    }
  }

  function spawnEmojis(emoji, count) {
    for (let i = 0; i < count; i++) {
      const e = document.createElement('div');
      e.className = 'emoji-pop'; e.textContent = emoji;
      const dx = (Math.random() - 0.5) * 100, dy = -Math.random() * 120 - 40;
      e.style.cssText = `left:${Math.random()*80+10}%;top:${Math.random()*50+20}%;--dx:${dx}px;--dy:${dy}px;animation-delay:${Math.random()*.3}s;`;
      document.body.appendChild(e);
      setTimeout(() => e.remove(), 2000);
    }
  }

  // ── Misc / Easter eggs ───────────────────────────────────
  let logoClicks = 0, logoTimer;
  function logoClick() {
    if (window.SFX) SFX.click();
    logoClicks++; clearTimeout(logoTimer);
    logoTimer = setTimeout(() => logoClicks = 0, 2000);
    if (logoClicks >= 5 && window.toggleDisco) toggleDisco();
  }

  let mascotIdx = 0;
  function mascotTalk() {
    if (window.SFX) SFX.click();
    const msgs = (window.MASCOT_MSGS && (MASCOT_MSGS[window.currentLang] || MASCOT_MSGS.en)) || [];
    if (msgs.length) showToast(msgs[mascotIdx % msgs.length]);
    mascotIdx++;
    const m = document.getElementById('mascotEmoji');
    if (m) { m.style.transform = 'scale(1.5) rotate(20deg)'; setTimeout(() => m.style.transform = '', 300); }
  }

  // ── Keyboard shortcuts ───────────────────────────────────
  let konamiSeq = [], konamiCode = [38,38,40,40,37,39,37,39,66,65];
  document.addEventListener('keydown', e => {
    konamiSeq.push(e.keyCode);
    if (konamiSeq.length > 10) konamiSeq.shift();
    if (konamiSeq.toString() === konamiCode.toString()) {
      showToast(window.t ? t('toastKonami') : '🎮 +100 XP!');
      if (window.SFX) SFX.levelUp();
      launchConfetti();
      const u = window.getCU && getCU();
      if (u) {
        if (window.Progress) Progress.addXP(u, 100, { source: 'easter-egg' });
        else { u.xp += 100; window.saveCU(u); }
        if (window.refreshUI) refreshUI();
      }
      spawnEmojis('🎮', 10);
    }
    if (e.key === 'Escape') {
      const overlay = document.getElementById('srchOverlay');
      if (overlay && overlay.classList.contains('on')) closeSrch();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const pl = document.getElementById('pane-login');
      if (pl && pl.style.display !== 'none' && document.getElementById('l-pass') === document.activeElement) {
        if (window.doLogin) doLogin();
      }
      const pr = document.getElementById('pane-reg');
      if (pr && pr.style.display !== 'none' && document.getElementById('r-pass') === document.activeElement) {
        if (window.doReg) doReg();
      }
    }
  });

  // ── Heart regeneration ───────────────────────────────────
  setInterval(() => {
    const u = window.getCU && getCU();
    if (u && u.hearts < 5) {
      u.hearts++; window.saveCU(u);
      if (window.refreshUI) refreshUI();
      showToast(window.t ? t('toastHeart') : '❤️ +1 Heart!');
    }
  }, 300000);

  // ── Random tips interval ─────────────────────────────────
  setInterval(() => {
    const u = window.getCU && getCU();
    if (u && document.getElementById('screen-app')?.classList.contains('active')) {
      const tips = window.TIPS && (TIPS[window.currentLang] || TIPS.en) || [];
      if (tips.length) showToast(tips[Math.floor(Math.random() * tips.length)]);
    }
  }, 180000);

  // ── Expose ───────────────────────────────────────────────
  window.closeLU       = closeLU;
  window.openSrch      = openSrch;
  window.closeSrch     = closeSrch;
  window.closeSrchEv   = closeSrchEv;
  window.doSearch      = doSearch;
  window.showToast     = showToast;
  window.showXPPop     = showXPPop;
  window.launchConfetti = launchConfetti;
  window.spawnEmojis   = spawnEmojis;
  window.logoClick     = logoClick;
  window.mascotTalk    = mascotTalk;

}());

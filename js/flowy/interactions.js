// ═══════════════════════════════════════════════════════════
//  🐥 flowy/interactions.js — Pupil tracking, look-around, click/hover, easter eggs, confetti
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── Confetti system ───────────────────────────────────────
  function spawnConfetti(count) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#ffd700','#ff6b9d','#7eb0ff','#00e676','#ffc93d','#b84dff','#ff5252'];
    for (let i = 0; i < (count || 30); i++) {
      const el = document.createElement('div');
      el.className = 'flowy-confetti-piece';
      el.style.cssText = `
        left:${10 + Math.random() * 80}vw;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        width:${6 + Math.random() * 8}px;
        height:${6 + Math.random() * 8}px;
        animation-delay:${Math.random() * 0.6}s;
        animation-duration:${1.2 + Math.random() * 1}s;
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        transform:rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
  }

  // ── Pupil tracking ────────────────────────────────────────
  function trackPupils(e) {
    if (S.currentState === 'sleeping') return;
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const max = 1.4;
    const ox = dist > 1 ? (dx / dist) * max : 0;
    const oy = dist > 1 ? (dy / dist) * max : 0;
    const pl = btn.querySelector('#flowy-pupil-l');
    const pr = btn.querySelector('#flowy-pupil-r');
    if (pl) { pl.setAttribute('cx', 24 + ox); pl.setAttribute('cy', 30.5 + oy); }
    if (pr) { pr.setAttribute('cx', 38 + ox); pr.setAttribute('cy', 30.5 + oy); }
  }

  // ── Random look-around (when idle) ───────────────────────
  function scheduleLookAround() {
    setTimeout(function look() {
      if (S.currentState === 'idle') {
        const btn = document.getElementById('flowy-btn');
        if (btn) {
          const pl = btn.querySelector('#flowy-pupil-l');
          const pr = btn.querySelector('#flowy-pupil-r');
          const ox = (Math.random() - 0.5) * 2.8;
          const oy = (Math.random() - 0.5) * 2;
          if (pl) { pl.setAttribute('cx', 24 + ox); pl.setAttribute('cy', 30.5 + oy); }
          if (pr) { pr.setAttribute('cx', 38 + ox); pr.setAttribute('cy', 30.5 + oy); }
          setTimeout(() => {
            if (pl) { pl.setAttribute('cx', '24.8'); pl.setAttribute('cy', '30.5'); }
            if (pr) { pr.setAttribute('cx', '38.8'); pr.setAttribute('cy', '30.5'); }
          }, 2000);
        }
      }
      setTimeout(look, 6000 + Math.random() * 8000);
    }, 4000);
  }

  // ── Click interactions ────────────────────────────────────
  function onFlowyClick() {
    K.wakeUpFromSleep();
    K.resetIdleTimer();
    S.clickCount++;
    S.rapidClicks++;
    clearTimeout(S.rapidClickTimer);

    if (S.clickCount === 50 && !S.dancing) { triggerDance(); return; }
    if (S.clickCount === 100) { triggerShades(); return; }

    S.rapidClickTimer = setTimeout(() => { S.rapidClicks = 0; }, 1500);
    if (S.rapidClicks >= 5) {
      S.rapidClicks = 0;
      K.setState('excited');
      K.smartBubble('tickle', 2500);
      clearTimeout(S.happyTimer);
      S.happyTimer = setTimeout(() => K.setState('idle'), 2800);
      return;
    }

    K.openModal(K.rand(K.msgs('wakeWord'), 'wakeWord'));
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => K.setState('idle'), 2500);
  }

  function onFlowyHover() {
    if (S.currentState === 'sleeping') { K.wakeUpFromSleep(); return; }
    if (S.currentState !== 'idle') return;
    const tipData = K.tabTips(S.currentTab);
    const roll    = Math.random();
    if (roll < 0.55 && tipData) K.showBubble(K.rand(tipData.tips, 'tab_tip'));
    else if (roll < 0.75) K.showBubble(K.rand(K.msgs('help'), 'help'));
    else if (roll < 0.88) K.showBubble(K.rand(K.msgs('idle'), 'idle'));
    else K.showBubble(K.rand(K.msgs('jokes_informal'), 'joke_i'));
    K.scheduleHide(3000);
  }

  // ── Easter eggs ───────────────────────────────────────────
  function triggerDance() {
    S.dancing = true;
    K.setState('celebrating');
    K.showBubble(K.rand(K.msgs('easter_dance'), 'easter_dance'));
    K.scheduleHide(4000);
    const btn = document.getElementById('flowy-btn');
    if (btn) btn.classList.add('state-dancing');
    spawnConfetti(60);
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => {
      S.dancing = false;
      if (btn) btn.classList.remove('state-dancing');
      K.setState('idle');
    }, 5000);
  }

  function triggerShades() {
    if (!S.shadesOn) {
      S.shadesOn = true;
      document.querySelectorAll('#flowy-shades').forEach(s => s.setAttribute('opacity', '1'));
      K.setState('happy');
      K.showBubble(K.rand(K.msgs('easter_shades'), 'easter_shades'));
      spawnConfetti(80);
      K.scheduleHide(5000);
      clearTimeout(S.happyTimer);
      S.happyTimer = setTimeout(() => K.setState('idle'), 3500);
    }
  }
  Object.assign(K, { onFlowyClick, onFlowyHover, scheduleLookAround, spawnConfetti, trackPupils });
  K.loaded['interactions'] = true;
}(window.FlowyKit));

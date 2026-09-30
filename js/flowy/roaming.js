// ═══════════════════════════════════════════════════════════
//  🐥 flowy/roaming.js — Screen roaming + idle teaser
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── Screen roaming ────────────────────────────────────────
  function getRandomPosition() {
    const margin  = 80;
    const btnSize = 80;
    const maxX = window.innerWidth  - btnSize - margin;
    const maxY = window.innerHeight - btnSize - margin;
    return { x: margin + Math.random() * maxX, y: margin + Math.random() * maxY };
  }

  function moveTo(x, y) {
    const wrap = document.getElementById('flowy-wrap');
    if (!wrap) return;
    wrap.style.bottom = 'auto';
    wrap.style.right  = 'auto';
    wrap.style.left   = x + 'px';
    wrap.style.top    = y + 'px';
  }

  function roamStep() {
    if (!S.roaming || S.modalVisible || S.currentState === 'sleeping') return;
    const pos = getRandomPosition();
    K.setState('roaming');
    moveTo(pos.x, pos.y);
    const tipData = K.tabTips(S.currentTab);
    const pools   = [K.msgs('roaming'), K.msgs('help')];
    if (tipData && Math.random() < 0.3) pools.push(tipData.tips);
    const pool = pools[Math.floor(Math.random() * pools.length)];
    clearTimeout(S.bubbleTimer);
    K.showBubble(K.rand(pool, 'roam'));
    K.scheduleHide(2400);
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => {
      if (S.currentState === 'roaming') {
        S.currentState = 'idle';
        const btn = document.getElementById('flowy-btn');
        if (btn) btn.className = 'state-idle';
      }
    }, 600);
    S.roamTimer = setTimeout(roamStep, 12000 + Math.random() * 12000);
  }

  function startRoaming() {
    S.roaming = true;
    S.roamTimer = setTimeout(roamStep, 16000 + Math.random() * 8000);
  }
  function stopRoaming() { S.roaming = false; clearTimeout(S.roamTimer); }

  // ── Idle teaser ───────────────────────────────────────────
  function scheduleIdleTeaser() {
    setTimeout(function tick() {
      if (S.currentState === 'idle' && !S.modalVisible) {
        const roll    = Math.random();
        const tipData = K.tabTips(S.currentTab);
        if      (roll < 0.4 && tipData) K.showBubble(K.rand(tipData.tips, 'tab_tip'));
        else if (roll < 0.65)           K.showBubble(K.rand(K.msgs('help'), 'help'));
        else if (roll < 0.8)            K.showBubble(K.rand(K.msgs('idle'), 'idle'));
        else {
          const pool = Math.random() < 0.5 ? K.msgs('jokes_informal') : K.msgs('jokes_formal');
          K.showBubble(K.rand(pool, 'joke'));
        }
        K.scheduleHide(4000);
      }
      setTimeout(tick, 10000 + Math.random() * 8000);
    }, 10000);
  }
  Object.assign(K, { scheduleIdleTeaser, startRoaming, stopRoaming });
  K.loaded['roaming'] = true;
}(window.FlowyKit));

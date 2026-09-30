// ═══════════════════════════════════════════════════════════
//  🐥 flowy/state-machine.js — Mascot mood/state, sleep + idle timers
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── State machine ─────────────────────────────────────────
  function setState(state) {
    if (S.currentState === state && state !== 'celebrating') return;
    S.currentState = state;
    const btn = document.getElementById('flowy-btn');
    if (!btn) return;

    btn.className = btn.className.replace(/state-\S+/g, '').trim();
    btn.classList.add('state-' + state);

    const smile  = btn.querySelector('#flowy-smile');
    const frown  = btn.querySelector('#flowy-frown');
    const browL  = btn.querySelector('#flowy-brow-l');
    const browR  = btn.querySelector('#flowy-brow-r');
    const browC  = btn.querySelector('#flowy-brow-c');
    const tearL  = btn.querySelector('#flowy-tear-l');
    const tearR  = btn.querySelector('#flowy-tear-r');
    const swirl  = btn.querySelector('#flowy-think-swirl');
    const hearts = btn.querySelector('#flowy-hearts');
    const sleepL = btn.querySelector('#flowy-sleep-l');
    const sleepR = btn.querySelector('#flowy-sleep-r');
    const mouthO = btn.querySelector('#flowy-mouth-o');

    const hide = el => el && el.setAttribute('opacity', '0');
    const show = el => el && el.setAttribute('opacity', '1');

    hide(smile); hide(frown); hide(browL); hide(browR); hide(browC);
    hide(tearL); hide(tearR); hide(swirl); hide(hearts); hide(sleepL); hide(sleepR); hide(mouthO);

    if (state === 'happy' || state === 'celebrating') { show(smile); }
    if (state === 'sad')     { show(frown); show(browL); show(browR); show(tearL); show(tearR); }
    if (state === 'thinking') { show(swirl); }
    if (state === 'love')    { show(hearts); }
    if (state === 'sleeping') { show(sleepL); show(sleepR); }
    if (state === 'confused') { show(browC); }
    if (state === 'excited')  { show(mouthO); show(smile); }
    if (state === 'surprised') { show(mouthO); }

    if (state === 'thinking') {
      K.showBubble('<span class="flowy-think-dot"></span><span class="flowy-think-dot"></span><span class="flowy-think-dot"></span>');
    } else if (state === 'speaking') {
      K.smartBubble('speaking', 3200);
    } else if (state === 'happy') {
      K.smartBubble('happy', 3000);
    } else if (state === 'sad') {
      K.smartBubble('sad', 3500);
    } else if (state === 'roaming') {
      K.smartBubble('roaming', 2000);
    } else if (state === 'sleeping') {
      K.smartBubble('sleeping', 0);
    } else if (state === 'celebrating') {
      K.smartBubble('celebrating', 3000);
      K.spawnConfetti(50);
    } else if (state === 'excited') {
      K.smartBubble('excited', 3000);
    } else if (state === 'love') {
      K.smartBubble('love', 3000);
    } else if (state === 'surprised') {
      K.smartBubble('surprised', 2500);
    } else if (state === 'confused') {
      K.smartBubble('confused', 3000);
    } else {
      K.hideBubble();
    }
  }

  // ── Sleeping / idle ───────────────────────────────────────
  function resetIdleTimer() {
    clearTimeout(S.yawnTimer);
    clearTimeout(S.idleTimer);
    if (S.currentState === 'sleeping') wakeUpFromSleep();
    S.yawnTimer = setTimeout(() => {
      if (S.currentState === 'idle' && !S.modalVisible) {
        K.smartBubble('yawn', 3000);
        S.idleTimer = setTimeout(() => {
          if (S.currentState === 'idle' && !S.modalVisible) setState('sleeping');
        }, 15000);
      }
    }, 45000);
  }

  function wakeUpFromSleep() {
    if (S.currentState !== 'sleeping') return;
    setState('idle');
    resetIdleTimer();
  }
  Object.assign(K, { resetIdleTimer, setState, wakeUpFromSleep });
  K.loaded['state-machine'] = true;
}(window.FlowyKit));

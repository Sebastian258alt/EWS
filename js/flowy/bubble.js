// ═══════════════════════════════════════════════════════════
//  🐥 flowy/bubble.js — Speech bubble: show / hide / AI-upgraded lines
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // Shows the fallback (static) line immediately — exactly like the old
  // direct showBubble()+scheduleHide() calls did — then, in the
  // background, asks Flowy's AI brain for a fresher, unpredictable
  // version of the same line and swaps it in if it arrives in time.
  // key      : message category (matches MSGS[lang][key] when fallback
  //            is omitted, otherwise just a label for the AI prompt)
  // ms       : how long to keep the bubble open (0/undefined = no auto-hide)
  // fallback : optional literal text; defaults to rand(msgs(key), key)
  // extra    : optional context object forwarded to the AI (tab, streak…)
  function smartBubble(key, ms, fallback, extra) {
    const staticText = (fallback !== undefined && fallback !== null) ? fallback : K.rand(K.msgs(key), key);
    showBubble(staticText);
    if (ms) scheduleHide(ms);

    if (!window.FlowyAI || !window.FlowyAI.isEnabled()) return;
    const gen = S.bubbleGen; // showBubble() above already incremented it
    const lang = K.isPT() ? 'pt' : 'en';

    window.FlowyAI.getLine(key, { lang: lang, fallback: staticText, extra: extra || {} })
      .then((aiLine) => {
        if (!aiLine || gen !== S.bubbleGen) return; // stale or no upgrade — keep static text
        const textEl = document.getElementById('flowy-bubble-text');
        const bubbleEl = document.getElementById('flowy-bubble');
        if (!textEl || !bubbleEl || !bubbleEl.classList.contains('visible')) return;
        textEl.classList.add('flowy-text-swap');
        textEl.innerHTML = aiLine;
        requestAnimationFrame(() => textEl.classList.remove('flowy-text-swap'));
        if (ms) scheduleHide(Math.max(ms, 2200) + 1200); // give the (often longer/fresher) AI line a bit more reading time
      });
  }

  // ── Bubble helpers ────────────────────────────────────────
  function showBubble(html) {
    S.bubbleGen++;
    clearTimeout(S.bubbleTimer);
    const el   = document.getElementById('flowy-bubble');
    const text = document.getElementById('flowy-bubble-text');
    if (!el || !text) return;
    text.innerHTML = html;
    // Defer the geometry read (getBoundingClientRect) to the next frame so it
    // doesn't run in the same task as the innerHTML write above — reading
    // layout right after a DOM mutation forces a synchronous reflow.
    requestAnimationFrame(() => {
      // NEW: flip bubble to left if mascot is near right edge
      const wrap = document.getElementById('flowy-wrap');
      if (wrap) {
        const rect = wrap.getBoundingClientRect();
        const nearRight = rect.right > window.innerWidth - 220;
        el.classList.toggle('flowy-bubble-left', !nearRight);
      }
      el.classList.add('visible');
    });
    K.resetIdleTimer();
  }
  function hideBubble() {
    const el = document.getElementById('flowy-bubble');
    if (el) el.classList.remove('visible');
  }
  function scheduleHide(ms) {
    clearTimeout(S.bubbleTimer);
    S.bubbleTimer = setTimeout(hideBubble, ms);
  }
  Object.assign(K, { hideBubble, scheduleHide, showBubble, smartBubble });
  K.loaded['bubble'] = true;
}(window.FlowyKit));

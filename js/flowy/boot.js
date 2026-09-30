// ═══════════════════════════════════════════════════════════
//  🐥 flowy/boot.js — Startup (init) + public window.Flowy API
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // Every part must have registered itself before we start. If a file 404s
  // (bad deploy, stale cache) we stop here with a clear message instead of
  // throwing "K.xyz is not a function" somewhere deep inside a timer.
  const REQUIRED = ['core', 'data-messages', 'data-tab-tips', 'svg', 'bubble', 'modal',
    'state-machine', 'interactions', 'reactions', 'hooks', 'voice', 'tabs', 'roaming', 'build'];
  const missing = REQUIRED.filter(function (m) { return !(K.loaded && K.loaded[m]); });
  if (missing.length) {
    console.error('[Flowy] Not starting — missing parts: ' + missing.join(', '));
    return;
  }

  // ── Boot ──────────────────────────────────────────────────
  // The app marks the visible screen with .active (see base.css / app.js
  // launchApp + logout). Older code checked .on, which never exists on these
  // screens, so Flowy was force-hidden on load. Accept either class.
  function isScreenOn(el) {
    return !!el && (el.classList.contains('active') || el.classList.contains('on'));
  }

  function init() {
    K.buildFlowy();
    K.hookChatFunctions();
    K.hookAnswerEvents();
    K.hookTabSystem();
    K.hookLangChange();
    K.scheduleIdleTeaser();
    K.scheduleTipCycle();
    K.startRoaming();
    K.resetIdleTimer();
    K.scheduleLookAround();

    const authScreen = document.getElementById('screen-auth');
    const appScreen  = document.getElementById('screen-app');

    if (authScreen && appScreen) {
      const obs = new MutationObserver(() => {
        const wrap  = document.getElementById('flowy-wrap');
        const modal = document.getElementById('flowy-modal');
        if (!wrap) return;
        const onAuth = isScreenOn(authScreen) && !isScreenOn(appScreen);
        if (onAuth) {
          wrap.style.display = 'none';
          if (modal) modal.style.display = 'none';
          K.stopRoaming(); clearTimeout(S.tipTimer); K.stopWakeListening();
        } else {
          wrap.style.display = '';
          if (modal) modal.style.display = '';
          if (!S.roaming) K.startRoaming();
          K.scheduleTipCycle();
          if (!K.isIOS() && K.supportsWakeWord() && !S.wakeListening) K.startWakeListening();
        }
      });
      obs.observe(authScreen, { attributes: true, attributeFilter: ['class'] });
      obs.observe(appScreen,  { attributes: true, attributeFilter: ['class'] });
      const wrap = document.getElementById('flowy-wrap');
      if (wrap) wrap.style.display = isScreenOn(appScreen) ? '' : 'none';
    }

    ['click','keydown','touchstart','scroll'].forEach(ev => {
      document.addEventListener(ev, K.resetIdleTimer, { passive: true });
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && S.modalVisible) K.closeModal(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    const poll = setInterval(() => {
      if (window.goTab) { clearInterval(poll); init(); }
    }, 80);
    setTimeout(() => { clearInterval(poll); if (!document.getElementById('flowy-wrap')) init(); }, 3000);
  }

  // ── Public API ────────────────────────────────────────────
  window.Flowy = {
    setState: K.setState,
    correct:        K.triggerCorrect,
    wrong:          K.triggerWrong,
    xp:             K.triggerXP,
    levelUp:        K.triggerLevelUp,
    streak:         K.triggerStreak,         // NEW
    lessonStep:     K.triggerLessonStep,     // NEW
    celebrate:      () => { K.setState('celebrating'); },
    say:            (msg) => { K.showBubble(msg); K.scheduleHide(3500); },
    setTab:         K.onTabChange,
    tip:            () => { const t = K.tabTips(S.currentTab); if (t) { K.showBubble(K.rand(t.tips, 'tab_tip')); K.scheduleHide(4000); } },
    open:           (msg) => K.openModal(msg),
    close:          K.closeModal,
    jokeInformal:   () => { K.showBubble(K.rand(K.msgs('jokes_informal'), 'joke_i')); K.scheduleHide(6000); },
    jokeFormal:     () => { K.showBubble(K.rand(K.msgs('jokes_formal'), 'joke_f')); K.scheduleHide(6000); },
    startListening: K.startWakeListening,
    stopListening:  K.stopWakeListening,
    confetti:       (n) => K.spawnConfetti(n),
    sleep:          () => K.setState('sleeping'),
    wake:           K.wakeUpFromSleep,
    love:           () => { K.setState('love'); clearTimeout(S.happyTimer); S.happyTimer = setTimeout(() => K.setState('idle'), 3000); },
    surprised:      () => { K.setState('surprised'); clearTimeout(S.happyTimer); S.happyTimer = setTimeout(() => K.setState('idle'), 2500); },
    excited:        () => { K.setState('excited'); clearTimeout(S.happyTimer); S.happyTimer = setTimeout(() => K.setState('idle'), 3000); },
  };
  K.loaded['boot'] = true;
}(window.FlowyKit));

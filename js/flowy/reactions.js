// ═══════════════════════════════════════════════════════════
//  🐥 flowy/reactions.js — Reactions to XP, level-up, streak, quiz + lesson events
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  // ── XP / Level-up reactions ───────────────────────────────
  function triggerXP() {
    K.setState('celebrating');
    K.spawnConfetti(40);
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => K.setState('idle'), 3000);
  }

  function triggerLevelUp() {
    K.setState('celebrating');
    K.spawnConfetti(80);
    K.showBubble(K.isPT() ? '🎉 SUBISTE DE NÍVEL!! 🏆' : '🎉 LEVEL UP!! 🏆');
    K.scheduleHide(5000);
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => K.setState('idle'), 5000);
  }

  // NEW: Streak milestone
  function triggerStreak(days) {
    K.setState('celebrating');
    K.spawnConfetti(days >= 30 ? 80 : 50);
    const msg = days
      ? (K.isPT() ? `🔥 ${days} DIAS DE SEQUÊNCIA!! Incrível! 🏆` : `🔥 ${days}-DAY STREAK!! Incredible! 🏆`)
      : K.rand(K.msgs('streak'), 'streak');
    K.showBubble(msg);
    K.scheduleHide(5000);
    clearTimeout(S.happyTimer);
    S.happyTimer = setTimeout(() => K.setState('idle'), 5000);
  }

  // ── Quiz reactions ────────────────────────────────────────
  function triggerCorrect() {
    clearTimeout(S.happyTimer);
    K.setState('happy');
    S.happyTimer = setTimeout(() => K.setState('idle'), 2500);
    K.resetIdleTimer();
  }
  function triggerWrong() {
    clearTimeout(S.happyTimer);
    K.setState('sad');
    S.happyTimer = setTimeout(() => K.setState('idle'), 3000);
    K.resetIdleTimer();
  }

  // NEW: lesson step reaction
  function triggerLessonStep() {
    if (S.currentState === 'idle' || S.currentState === 'roaming') {
      K.showBubble(K.rand(K.msgs('lesson'), 'lesson'));
      K.scheduleHide(3000);
    }
  }
  Object.assign(K, { triggerCorrect, triggerLessonStep, triggerLevelUp, triggerStreak, triggerWrong, triggerXP });
  K.loaded['reactions'] = true;
}(window.FlowyKit));

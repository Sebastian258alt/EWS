// ═══════════════════════════════════════════════════════════
//  🐥 flowy/hooks.js — Hooks into the host app: answer events, chat, language change
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function (K) {
  'use strict';
  const S = K.S;

  function hookAnswerEvents() {
    ['showCorrect','onCorrect','markCorrect','answerCorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { K.triggerCorrect(); return orig.apply(this, arguments); };
      }
    });
    ['showWrong','onWrong','markWrong','answerWrong','showIncorrect'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { K.triggerWrong(); return orig.apply(this, arguments); };
      }
    });
    ['onLevelUp','levelUp','showLevelUp'].forEach(fn => {
      if (typeof window[fn] === 'function') {
        const orig = window[fn];
        window[fn] = function () { K.triggerLevelUp(); return orig.apply(this, arguments); };
      }
    });

    const xppop = document.getElementById('xppop');
    const toast = document.getElementById('toast');
    if (xppop || toast) {
      const obs = new MutationObserver((mutations) => {
        mutations.forEach(m => {
          const text = (m.target.textContent || '').toLowerCase();
          if (m.target.id === 'xppop' && m.target.style.display !== 'none' && text.includes('xp')) {
            if (text.includes('level') || text.includes('nível')) K.triggerLevelUp();
            else K.triggerXP();
          }
          if (m.target.id === 'toast') {
            if (text.includes('level') || text.includes('nível')) K.triggerLevelUp();
            else if (text.includes('streak') || text.includes('sequência')) K.triggerStreak(0);
            else if (text.includes('correct') || text.includes('✅') || text.includes('🎉') ||
                text.includes('correto') || text.includes('certo')) K.triggerCorrect();
            else if (text.includes('wrong') || text.includes('❌') || text.includes('incorrect') ||
                text.includes('errado') || text.includes('incorreto')) K.triggerWrong();
          }
        });
      });
      if (xppop) obs.observe(xppop, { attributes: true, attributeFilter: ['style'], childList: true, subtree: true });
      if (toast) obs.observe(toast, { attributes: true, attributeFilter: ['style','class'], childList: true, subtree: true });
    }

    // General feedback selectors
    const feedbackObs = new MutationObserver(() => {
      if (document.querySelector('.feedback-correct, .answer-correct, [data-correct="true"]')) K.triggerCorrect();
      if (document.querySelector('.feedback-wrong, .answer-wrong, [data-correct="false"]'))    K.triggerWrong();
      if (document.querySelector('.level-up, .levelup, [data-levelup="true"]'))                K.triggerLevelUp();
    });
    feedbackObs.observe(document.body, { childList: true, subtree: true, attributeFilter: ['class','data-correct','data-levelup'] });

    // NEW: lesson flow step observer (hooks into EWS 4-step lesson engine)
    const lessonObs = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        if (m.type === 'attributes') {
          const el = m.target;
          const step = el.getAttribute('data-step');
          if (step && step !== '0') K.triggerLessonStep();
        }
        if (m.type === 'childList') {
          m.addedNodes.forEach(n => {
            if (n.nodeType === 1) {
              if (n.classList && (n.classList.contains('lesson-step') || n.classList.contains('step-content'))) {
                K.triggerLessonStep();
              }
            }
          });
        }
      });
    });
    lessonObs.observe(document.body, {
      childList: true, subtree: true,
      attributes: true, attributeFilter: ['data-step'],
    });
  }

  // ── Chat hooks ────────────────────────────────────────────
  function hookChatFunctions() {
    const orig_show = window.showTypingIndicator;
    const orig_hide = window.hideTypingIndicator;
    if (orig_show) {
      window.showTypingIndicator = function () { K.setState('thinking'); return orig_show.apply(this, arguments); };
    }
    if (orig_hide) {
      window.hideTypingIndicator = function () {
        const r = orig_hide.apply(this, arguments);
        K.setState('speaking');
        clearTimeout(S.happyTimer);
        S.happyTimer = setTimeout(() => { K.setState('happy'); setTimeout(() => K.setState('idle'), 2000); }, 1400);
        return r;
      };
    }
  }

  // ── Language hook ─────────────────────────────────────────
  function hookLangChange() {
    const origSetLang = window.setLang;
    if (origSetLang) {
      window.setLang = function(lang) {
        const result = origSetLang.apply(this, arguments);
        setTimeout(() => {
          K.updateModalLabels();
          K.updateMicLabel();
        }, 300);
        return result;
      };
    }
  }
  Object.assign(K, { hookAnswerEvents, hookChatFunctions, hookLangChange });
  K.loaded['hooks'] = true;
}(window.FlowyKit));

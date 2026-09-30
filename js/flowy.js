// ═══════════════════════════════════════════════════════════
//  🐥 FLOWY — Floating mascot assistant (BILINGUAL v5.1)
//  English With Sebastian
//
//  This file is now only a tiny LOADER. The mascot lives in small,
//  single-purpose parts under js/flowy/ (see the list below), which
//  share state through window.FlowyKit. app.js still loads this one
//  file via EWSLoadFeature('flowy', 'js/flowy.js') — nothing else
//  in the app needs to know about the split.
//
//  Parts, in load order (order matters; boot.js must stay last):
//    core            namespace, shared state (FlowyKit.S), lang + message helpers
//    data-messages   bilingual speech-bubble message banks
//    data-tab-tips   per-tab tips
//    svg             mascot artwork
//    bubble          speech bubble show/hide + AI-upgraded lines
//    modal           chat-invite modal
//    state-machine   mood/state, sleep + idle timers
//    interactions    pupils, look-around, click/hover, easter eggs, confetti
//    reactions       XP / level-up / streak / quiz / lesson reactions
//    hooks           hooks into the host app (answers, chat, language)
//    voice           wake-word recognition + shout detection
//    tabs            tab-change reactions + tip cycle
//    roaming         screen roaming + idle teaser
//    build           builds the mascot DOM
//    boot            startup + public window.Flowy API
//
//  Public API is unchanged: window.Flowy.{setState, correct, wrong, xp,
//  levelUp, streak, lessonStep, celebrate, say, setTab, tip, open, close,
//  jokeInformal, jokeFormal, startListening, stopListening, confetti,
//  sleep, wake, love, surprised, excited}.
// ═══════════════════════════════════════════════════════════
(function () {
  'use strict';

  var PARTS = ['core', 'data-messages', 'data-tab-tips', 'svg', 'bubble', 'modal',
    'state-machine', 'interactions', 'reactions', 'hooks', 'voice', 'tabs',
    'roaming', 'build', 'boot'];

  // Resolve js/flowy/ relative to THIS script, so it works under any base path.
  var me = document.currentScript && document.currentScript.src;
  var base = me ? me.replace(/flowy\.js(\?.*)?$/, 'flowy/') : 'js/flowy/';
  var query = me && me.indexOf('?') > -1 ? me.slice(me.indexOf('?')) : '';

  var pending = PARTS.length, failed = [];
  function done() {
    if (--pending === 0 && failed.length) {
      console.error('[Flowy] Failed to load parts: ' + failed.join(', '));
    }
  }
  PARTS.forEach(function (name) {
    var s = document.createElement('script');
    s.src = base + name + '.js' + query;
    s.async = false;               // parallel download, strictly ordered execution
    s.onload = done;
    s.onerror = function () { failed.push(name); done(); };
    document.head.appendChild(s);
  });
}());

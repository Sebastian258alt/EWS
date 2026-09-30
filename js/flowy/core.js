// ═══════════════════════════════════════════════════════════
//  🐥 flowy/core.js — Namespace, shared state, language + message helpers
//  Part of the Flowy mascot (split from the old single-file flowy.js).
//  Shares state via window.FlowyKit.S; exports via window.FlowyKit.
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const K = (window.FlowyKit = window.FlowyKit || {});

  // ── Shared mutable state (was a pile of `let`s inside one closure) ──
  K.S = {
    currentState: 'idle',
    currentTab: 'home',
    bubbleTimer: null,
    happyTimer: null,
    roamTimer: null,
    tipTimer: null,
    idleTimer: null,
    yawnTimer: null,
    roaming: false,
    wakeListening: false,
    alwaysListening: false,
    wakeRecognition: null,
    modalVisible: false,
    jokeIndex: { formal: 0, informal: 0 },
    clickCount: 0,
    rapidClickTimer: null,
    rapidClicks: 0,
    shadesOn: false,
    dancing: false,
    lastMsgs: {},
    audioCtx: null,
    analyserNode: null,
    audioSource: null,
    volumeInterval: null,
    reconnectDelay: 1000,  // NEW: for exponential backoff
    bubbleGen: 0,
    modalGen: 0,
    lastVolume: 0,
  };
  const S = K.S;

  'use strict';

  // ── Language helper ──────────────────────────────────────
  function getLang() {
    if (typeof window.currentLang !== 'undefined') return window.currentLang;
    const stored = localStorage.getItem('ews4_lang') || '';
    return (stored.startsWith('pt') || stored === 'mz') ? 'pt' : 'en';
  }
  function isPT() { const l = getLang(); return l === 'pt' || l === 'mz' || l.startsWith('pt'); }

  // ── iOS guard (SpeechRecognition is broken on iOS Safari) ─
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }   // NEW: for exponential backoff

  // ── Helpers ──────────────────────────────────────────────
  // Non-repeating random pick
  function rand(arr, key) {
    if (!arr || !arr.length) return '';
    if (arr.length === 1) return arr[0];
    let idx = Math.floor(Math.random() * arr.length);
    if (key && S.lastMsgs[key] === idx) {
      idx = (idx + 1) % arr.length;
    }
    if (key) S.lastMsgs[key] = idx;
    return arr[idx];
  }
  function msgs(key) {
    const lang = isPT() ? 'pt' : 'en';
    return K.MSGS[lang][key] || K.MSGS.en[key] || [];
  }
  function tabTips(tab) {
    const lang = isPT() ? 'pt' : 'en';
    return (K.TAB_TIPS[lang] || K.TAB_TIPS.en)[tab] || null;
  }
  Object.assign(K, { getLang, isPT, isIOS, rand, msgs, tabTips });
  K.loaded = K.loaded || {};
  K.loaded.core = true;
}());

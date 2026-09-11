// ═══════════════════════════════════════════════════════════
//  I18N.JS — Language / Translation runtime  v4.0
//  English With Sebastian
//  Extracted from app.js for independent updates.
//  Depends on: TRANSLATIONS (data.js)
//  Exposes: window.t(), window.setLang(), window.applyLang(), window.currentLang
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Detect initial language ──────────────────────────────
  // Prefer index.html's Phase 1.5 detection (guarantees the locale file it
  // already loaded matches what we use here); fall back to recomputing the
  // same logic if that global is ever absent (e.g. a different entry page).
  let currentLang = window.__EWS_INITIAL_LANG || localStorage.getItem('ews4_lang') ||
    (navigator.language && navigator.language.startsWith('pt') ? 'mz' : 'en');

  // ── Locale-split (Sprint 4): map each selectable language to its file ──
  const LOCALE_GLOBAL_MAP = {
    'en':    { file: 'en',    global: '__I18N_EN' },
    'en-gb': { file: 'en-gb', global: '__I18N_ENGB' },
    'mz':    { file: 'mz',    global: '__I18N_MZ' },
    'pt':    { file: 'pt',    global: '__I18N_PT' },
    'pt-pt': { file: 'pt-pt', global: '__I18N_PTPT' },
  };

  // Fetches a locale's file if it hasn't been fetched yet, then merges it
  // into TRANSLATIONS. Tracked separately from TRANSLATIONS[lang] itself,
  // since content-loader.js can pre-create TRANSLATIONS[lang] with just a
  // handful of Supabase-sourced overrides before the real file ever loads —
  // checking TRANSLATIONS[lang] truthiness alone would wrongly skip the fetch.
  const _localeFileLoaded = { en: true };
  if (currentLang !== 'en') _localeFileLoaded[currentLang] = true; // Phase 1.5 already loaded this one
  const _localeLoadPromises = {};
  function ensureLocaleLoaded(lang) {
    if (_localeFileLoaded[lang]) return Promise.resolve();
    if (_localeLoadPromises[lang]) return _localeLoadPromises[lang];
    const entry = LOCALE_GLOBAL_MAP[lang];
    if (!entry) return Promise.resolve(); // unknown lang, t() will fall back to en
    _localeLoadPromises[lang] = new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = 'js/data/locales/i18n-' + entry.file + '.js';
      s.onload = () => {
        // File data is the base; any pre-existing keys (e.g. admin overrides
        // already merged in by content-loader.js) take precedence over it.
        TRANSLATIONS[lang] = Object.assign({}, window[entry.global] || {}, TRANSLATIONS[lang] || {});
        _localeFileLoaded[lang] = true;
        resolve();
      };
      s.onerror = () => {
        console.error('[i18n] Failed to load locale file for "' + lang + '" — falling back to English for this session.');
        delete _localeLoadPromises[lang];
        resolve(); // don't reject — t() already falls back to TRANSLATIONS.en
      };
      document.head.appendChild(s);
    });
    return _localeLoadPromises[lang];
  }

  // ── Translate key ────────────────────────────────────────
  function t(key, vars = {}) {
    const fallbacks = { 'mz': 'pt', 'pt-pt': 'pt', 'en-gb': 'en' };
    const lang = TRANSLATIONS[currentLang]
      ? currentLang
      : (fallbacks[currentLang] || 'en');
    let str = (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] || key;
    Object.entries(vars).forEach(([k, v]) => { str = str.replaceAll(`{${k}}`, v); });
    return str;
  }

  // ── Set language ─────────────────────────────────────────
  async function setLang(lang) {
    await ensureLocaleLoaded(lang);
    currentLang = lang;
    localStorage.setItem('ews4_lang', lang);
    const getCU   = window.getCU;
    const saveCU  = window.saveCU;
    if (getCU && saveCU) {
      const u = getCU();
      if (u) { u.lang = lang; saveCU(u); }
    }
    applyLang();
    // Rebuild search index for new language
    window.SEARCH_INDEX = window.buildSearchIndex ? window.buildSearchIndex() : [];
    const toasts = {
      'en':    '🇺🇸 English (US) activated!',
      'en-gb': '🇬🇧 English (UK) activated!',
      'mz':    '🇲🇿 Português moçambicano activado!',
      'pt':    '🇧🇷 Português (Brasil) activado!',
      'pt-pt': '🇵🇹 Português (Portugal) activado!',
    };
    if (window.showToast) window.showToast(toasts[lang] || '🌐 Language changed!');
  }

  // ── Apply language to DOM ─────────────────────────────────
  function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = t(key);
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t(key);
      } else {
        el.textContent = t(key);
      }
    });
    // Handle elements that only carry data-i18n-placeholder (no data-i18n key)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      if (!el.hasAttribute('data-i18n')) {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    if (document.getElementById('screen-app')?.classList.contains('active')) {
      const activeTab = document.querySelector('.tab.on')?.id?.replace('tab-', '');
      if (window.refreshUI) window.refreshUI();
      if (activeTab === 'home') {
        if (window.renderCurriculum) window.renderCurriculum();
        if (window.renderStudentDashboard) window.renderStudentDashboard();
      } else if (activeTab === 'grammar') {
        if (window.renderGram) window.renderGram();
      } else if (activeTab === 'sounds') {
        if (window.renderPron) window.renderPron();
      } else if (activeTab === 'profile') {
        if (window.renderAchs) window.renderAchs(window.getCU?.());
      } else if (activeTab === 'ai') {
        if (window._chatInitDone && window.initChat) window.initChat();
      } else if (activeTab === 'about') {
        if (window.renderAbout) window.renderAbout();
      }
    }
  }

  // ── Expose globally ──────────────────────────────────────
  // Use Object.defineProperty so currentLang stays in sync
  Object.defineProperty(window, 'currentLang', {
    get: () => currentLang,
    set: (v) => { currentLang = v; },
    configurable: true,
  });
  window.t        = t;
  window.setLang  = setLang;
  window.applyLang = applyLang;
  window.ensureLocaleLoaded = ensureLocaleLoaded;

}());

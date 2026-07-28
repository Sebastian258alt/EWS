// ═══════════════════════════════════════════════════════════
//  🐥🧠 FLOWY-AI.JS — Live Gemini-powered personality engine
//  English With Sebastian
//
//  Instead of only picking from static text banks, Flowy can now
//  ask Gemini for a fresh, funny, mood-driven line for whatever
//  just happened (correct answer, wrong answer, level up, streak,
//  joke request, etc). This file is just the client — the actual
//  Gemini call happens server-side in the Supabase Edge Function
//  "flowy-ai" (see /supabase-functions/flowy-ai/index.ts), the
//  same pattern chat.js already uses for the AI tutor, so your
//  Gemini API key is never exposed in the browser.
//
//  Design goals:
//   • NEVER block the UI — every call is timeout-guarded.
//   • NEVER throw — callers always get null on any failure and
//     just fall back to the existing static banks.
//   • Backs off automatically if Gemini/network is flaky, so a
//     bad connection can't spam requests.
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // "All the moods" — Flowy picks one per reaction so the exact
  // same event (e.g. a correct answer) can feel different every time.
  const MOODS = ['hype', 'sarcastic', 'wholesome', 'dramatic', 'chaotic', 'deadpan', 'proud', 'sassy'];

  const MOODS_BY_CATEGORY = {
    wrong:   ['sarcastic', 'wholesome', 'dramatic', 'deadpan', 'sassy'],
    levelUp: ['hype', 'proud', 'chaotic', 'dramatic'],
    streak:  ['hype', 'proud', 'chaotic'],
    perfect: ['hype', 'proud', 'dramatic'],
  };

  let failStreak = 0;
  let cooldownUntil = 0;

  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function pickMood(category) {
    return rand(MOODS_BY_CATEGORY[category] || MOODS);
  }

  function getLang() {
    if (typeof window.currentLang !== 'undefined' && window.currentLang) return window.currentLang;
    const stored = localStorage.getItem('ews4_lang') || '';
    return (stored.startsWith('pt') || stored === 'mz') ? 'pt' : 'en';
  }

  // Race a promise against a timeout — resolves null instead of
  // ever hanging or rejecting, so callers can safely `await` this.
  function withTimeout(promise, ms) {
    return new Promise((resolve) => {
      let settled = false;
      const timer = setTimeout(() => { if (!settled) { settled = true; resolve(null); } }, ms);
      promise.then((v) => {
        if (!settled) { settled = true; clearTimeout(timer); resolve(v); }
      }).catch(() => {
        if (!settled) { settled = true; clearTimeout(timer); resolve(null); }
      });
    });
  }

  async function rawFetch(category, ctx) {
    if (!window.supabaseClient || !window.supabaseClient.functions) return null;
    if (Date.now() < cooldownUntil) return null;

    const mood = pickMood(category);
    const u = (typeof window.getCU === 'function') ? window.getCU() : null;

    try {
      const { data, error } = await window.supabaseClient.functions.invoke('flowy-ai', {
        body: {
          category, // 'correct' | 'wrong' | 'levelUp' | 'streak' | 'combo' | 'perfect' | 'achievement' | 'joke'
          mood,
          lang: getLang(),
          context: Object.assign({
            name:  u ? (u.name || u.un) : null,
            level: u ? u.level : null,
            xp:    u ? u.xp : null,
          }, ctx || {}),
        },
      });
      if (error) throw new Error(error.message);
      if (!data || !data.text) throw new Error('empty AI response');
      failStreak = 0;
      return { text: String(data.text).slice(0, 180), mood: data.mood || mood };
    } catch (e) {
      failStreak++;
      // 3 fails in a row → back off for a bit instead of hammering
      // a possibly-down function on every quiz answer.
      if (failStreak >= 3) cooldownUntil = Date.now() + Math.min(60000, failStreak * 8000);
      return null;
    }
  }

  /**
   * Fetches an AI-generated line for a given event category.
   * @param {string} category e.g. 'correct', 'wrong', 'levelUp', 'streak', 'joke'
   * @param {object} ctx extra context (streak days, combo count, score, etc)
   * @param {number} timeoutMs how long to wait before giving up (default 1100ms)
   * @returns {Promise<{text:string, mood:string}|null>}
   */
  function getLine(category, ctx, timeoutMs) {
    return withTimeout(rawFetch(category, ctx), timeoutMs || 1100);
  }

  window.FlowyAI = { getLine, MOODS };
}());

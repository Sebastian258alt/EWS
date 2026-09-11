// ═══════════════════════════════════════════════════════════
//  🌊 FLOWY-AI.JS — AI upgrade layer for the Flowy mascot
//  English With Sebastian v3.0
//
//  Talks to the "flowy-line" Supabase Edge Function to get a
//  fresh, unpredictable line for the mascot's speech bubble.
//  flowy.js NEVER waits on this: it always shows the static
//  line first (zero latency), then calls window.FlowyAI.getLine()
//  in the background and swaps the text in IF a good answer
//  arrives in time. If it doesn't — offline, slow, disabled,
//  errored, whatever — the static line just stays. Nothing in
//  flowy.js can block or crash because of this file.
//
//  Public API (consumed by flowy.js):
//    window.FlowyAI.isEnabled()            -> boolean
//    window.FlowyAI.getLine(key, opts)     -> Promise<string|null>
//      opts = { lang: 'pt'|'en', fallback: string, extra?: object }
//      Resolves to a string (the AI line) or null (use fallback).
//      NEVER rejects.
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  const FN_NAME     = 'flowy-line';
  const TIMEOUT_MS   = 1800;   // don't make the user wait for a mascot quip
  const MIN_GAP_MS   = 900;    // don't fire two AI calls back-to-back
  const COOLDOWN_AFTER_FAILS = 3;      // consecutive failures before we back off
  const COOLDOWN_MS  = 5 * 60 * 1000;  // 5 min circuit-breaker after repeated failures

  let consecutiveFails = 0;
  let cooldownUntil     = 0;
  let lastCallAt        = 0;
  let inFlight          = 0;
  const MAX_INFLIGHT    = 1; // Flowy only ever needs one fresh line at a time

  // Local opt-out — respected if the user (or a future settings toggle)
  // sets localStorage.flowyAI = 'off'. Defaults to on.
  function userOptedOut() {
    try {
      return localStorage.getItem('flowyAI') === 'off';
    } catch (_) {
      return false;
    }
  }

  function isEnabled() {
    if (userOptedOut()) return false;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
    if (Date.now() < cooldownUntil) return false;
    if (inFlight >= MAX_INFLIGHT) return false;
    if (!window.supabaseClient || typeof window.supabaseClient.functions?.invoke !== 'function') {
      return false;
    }
    if (typeof isSupabaseConfigured === 'function' && !isSupabaseConfigured()) return false;
    return true;
  }

  function registerSuccess() {
    consecutiveFails = 0;
    cooldownUntil = 0;
  }

  function registerFailure() {
    consecutiveFails++;
    if (consecutiveFails >= COOLDOWN_AFTER_FAILS) {
      cooldownUntil = Date.now() + COOLDOWN_MS;
      consecutiveFails = 0; // reset counter, cooldown itself now guards isEnabled()
    }
  }

  function withTimeout(promise, ms) {
    return new Promise((resolve) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        resolve(null);
      }, ms);
      promise.then(
        (val) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(val);
        },
        () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(null);
        }
      );
    });
  }

  // key    : message category, forwarded as free-text context to the model
  // opts.lang     : 'pt' | 'en'
  // opts.fallback : the static line already on screen — the model riffs
  //                 off its tone/length without ever seeing/reusing it verbatim
  // opts.extra    : optional small object (tab, streak, etc.) for flavour
  function getLine(key, opts) {
    opts = opts || {};
    if (!isEnabled()) return Promise.resolve(null);

    const now = Date.now();
    if (now - lastCallAt < MIN_GAP_MS) return Promise.resolve(null);
    lastCallAt = now;

    inFlight++;
    const call = window.supabaseClient.functions
      .invoke(FN_NAME, {
        body: {
          key: String(key || 'idle'),
          lang: opts.lang === 'pt' ? 'pt' : 'en',
          fallback: String(opts.fallback || ''),
          extra: opts.extra || {},
        },
      })
      .then(({ data, error }) => {
        if (error) throw error;
        const line = data && typeof data.line === 'string' ? data.line.trim() : '';
        if (!line) return null;
        registerSuccess();
        return line;
      })
      .catch((err) => {
        console.warn('[FlowyAI] getLine failed, falling back to static line:', err && err.message);
        registerFailure();
        return null;
      })
      .finally(() => {
        inFlight--;
      });

    return withTimeout(call, TIMEOUT_MS);
  }

  window.FlowyAI = { isEnabled, getLine };
})();

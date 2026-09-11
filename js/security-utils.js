// ═══════════════════════════════════════════════════════════
//  security-utils.js — P0 hardening: shared security helpers
//  Loaded FIRST (before data/app/feature scripts) so every
//  module can rely on window.escapeHtml / window.safeAvatarStyle
//  / window.secureToken being present.
//
//  Rules for using this file (see SECURITY.md):
//   • Any user-controlled string (name, avatar, chat text, un,
//     bio, anything that came from Supabase/localStorage/URL)
//     going into innerHTML/insertAdjacentHTML MUST be passed
//     through escapeHtml() first.
//   • Prefer textContent over innerHTML whenever no HTML
//     structure is actually needed.
//   • Do not escape twice — escapeHtml() is idempotent-unsafe
//     (escaping already-escaped text produces double-encoded
//     output), so call it exactly once, right at the point of
//     insertion into HTML.
// ═══════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── HTML escaping ─────────────────────────────────────────
  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  // ── Safe "background-image: url(...)" builder ─────────────
  // Used for avatar rendering. Only accepts:
  //   - null/empty            -> no style
  //   - "emoji:<char>"         -> caller handles separately (not a URL)
  //   - http(s) URLs           -> the only URL scheme we trust
  // Anything else (javascript:, data:, unexpected protocols, or
  // strings crafted to break out of the style attribute) is
  // rejected so a malicious `avatar` value pulled from Supabase
  // can never inject CSS/HTML via a style attribute.
  function safeAvatarUrl(value) {
    if (!value || typeof value !== 'string') return null;
    if (value.startsWith('emoji:')) return null;
    try {
      const u = new URL(value, window.location.href);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
      // Re-serialize via URL so any quote/paren/etc trickery in the
      // original string can't survive into the CSS value.
      return u.href.replace(/["'()]/g, '');
    } catch {
      return null;
    }
  }

  // ── Cryptographically-strong random token ─────────────────
  // Used for local session flags. Not a substitute for a real
  // server-issued session (Supabase Auth's JWT is), but avoids
  // the previous Math.random()-based token which is predictable.
  function secureToken(len = 32) {
    if (window.crypto && window.crypto.getRandomValues) {
      const bytes = new Uint8Array(len);
      window.crypto.getRandomValues(bytes);
      return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    }
    // Extremely old browser fallback (should not happen in practice).
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  // ── Very small allowlist-based validators (defense in depth;
  //    the real enforcement lives in Postgres RLS/check constraints) ──
  function isReasonableUsername(un) {
    return typeof un === 'string' && /^[a-zA-Z0-9_.-]{3,32}$/.test(un);
  }
  function isReasonableEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
  }
  function clampDisplayName(name) {
    return String(name ?? '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 32);
  }

  // ── PBKDF2 password hashing — OFFLINE FALLBACK ONLY ────────
  // This app's normal path is Supabase Auth (GoTrue does real password
  // hashing server-side and this app never sees a hash, only a session
  // JWT). This function exists solely for the degraded case where
  // Supabase is unreachable/misconfigured and the app would otherwise
  // have nothing but plaintext to fall back on. It uses the browser's
  // native Web Crypto SubtleCrypto PBKDF2 implementation — not a
  // hand-rolled cipher — with a random salt and 150k iterations, and
  // NEVER the plaintext password itself is stored.
  async function hashPassword(password, saltHex) {
    const enc = new TextEncoder();
    const salt = saltHex
      ? Uint8Array.from(saltHex.match(/.{2}/g).map((b) => parseInt(b, 16)))
      : window.crypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']
    );
    const bits = await window.crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt, iterations: 150000, hash: 'SHA-256' },
      keyMaterial,
      256
    );
    const hashHex = Array.from(new Uint8Array(bits), (b) => b.toString(16).padStart(2, '0')).join('');
    const saltOut = Array.from(salt, (b) => b.toString(16).padStart(2, '0')).join('');
    return { saltHex: saltOut, hashHex, iterations: 150000 };
  }

  async function verifyPassword(password, saltHex, expectedHashHex) {
    if (!window.crypto?.subtle) return false;
    const { hashHex } = await hashPassword(password, saltHex);
    return hashHex === expectedHashHex;
  }

  window.hashPassword = hashPassword;
  window.verifyPassword = verifyPassword;
  window.escapeHtml = escapeHtml;
  window.safeAvatarUrl = safeAvatarUrl;
  window.secureToken = secureToken;
  window.isReasonableUsername = isReasonableUsername;
  window.isReasonableEmail = isReasonableEmail;
  window.clampDisplayName = clampDisplayName;
})();

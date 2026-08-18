// service-worker.js — EWS PWA v4 (zero-dependency, network-first)
const CACHE_NAME = 'ews-v14'; // ← v14: Sprint 3 a11y — per-unit lazy loading, manifest.json format changed

// Core shell files only — unit files are NOT listed here.
const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/css/base.css',
  '/css/auth.css',
  '/css/layout.css',
  '/css/tabs/home-hero.css',
  '/css/tabs/home-dashboard.css',
  '/css/tabs/home-cards.css',
  '/css/tabs/home-curriculum.css',
  '/css/tabs/grammar.css',
  '/css/tabs/sounds.css',
  '/css/tabs/ai.css',
  '/css/tabs/profile.css',
  '/css/tabs/leaderboard.css',
  '/css/tabs/about.css',
  '/css/tabs/settings.css',
  '/css/overlays-quiz.css',
  '/css/overlays-game.css',
  '/css/overlays-modals.css',
  '/css/overlays-fx.css',
  '/css/overlays-responsive.css',
  '/css/overlays-gamification.css',
  '/css/flowy.css',
  '/manifest.json',
  '/js/data/manifest.json',
  '/js/lazy-loader.js',
  '/favicon-96x96.png',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/auth-callback.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('[SW] Install cache error:', err);
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Always network for API/external calls
  if (
    url.hostname.includes('supabase.co') ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('anthropic.com') ||
    url.hostname.includes('cdn.jsdelivr.net')
  ) {
    event.respondWith(
      fetch(event.request)
        .catch(() => new Response(JSON.stringify({ error: 'Offline' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }))
    );
    return;
  }

  // FIX #1: Network-first for JS data files — match both root-served and subdir-served paths
  // Also catches GitHub Pages subdirectory deployments (e.g. /EWS-main/js/data/...)
  const isDataFile = url.pathname.includes('/js/data/');
  if (isDataFile) {
    // Step 2.3A Fix #1: js/data/{level}/{file}.js curriculum unit files are
    // loaded via a <script src> tag, not fetch()+JSON.parse like
    // manifest.json/locale data. A 200 response with body "{}" is valid,
    // no-op JavaScript, so the old fallback below made an offline,
    // never-cached unit's <script> tag report onload (success) even
    // though its content never registered — js/lazy-loader.js then removed
    // the unit's stub, silently deleting the unit from UNITS with no error
    // and no retry (see Step 2.2 audit, Offline/PWA findings). Only the
    // curriculum-unit-script case changes here; every other /js/data/
    // request (manifest.json, i18n locale files) keeps the exact prior
    // "{}"/200 fallback behavior.
    const isUnitScript = /\/js\/data\/(a0|a1|a2|b1|b2)\/[^/]+\.js$/.test(url.pathname);
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        // FIX #2: On network failure, return cached copy OR a safe empty JSON —
        // NEVER return /index.html for data files (would cause JSON parse error)
        .catch(() => caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (isUnitScript) {
            // Do NOT fabricate a 200 for an uncached unit script — that
            // reads to the <script> tag as a successful (empty) load.
            // A non-2xx status makes the classic-script fetch algorithm
            // fire the tag's onerror instead, so loadScript()'s promise
            // rejects, js/lazy-loader.js's ensureFile() sees a real
            // failure (and — Fix #3 — can be retried), and the unit's
            // stub is left in place instead of being removed.
            return new Response('', {
              status: 503,
              statusText: 'Offline — unit not cached yet'
            });
          }
          // Return safe fallback so the app shows a friendly error, not a crash
          return new Response('{}', {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }))
    );
    return;
  }

  // Cache-first for everything else (shell, css, icons)
  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
      // FIX #3: Only fallback to /index.html for navigation requests, not all requests
      .catch(() => {
        if (event.request.mode === 'navigate') return caches.match('/index.html');
        return new Response('', { status: 404 });
      })
  );
});

// service-worker.js — EWS PWA v4 (zero-dependency, network-first)
const CACHE_NAME = 'ews-v9'; // ← v9: fix forced reflow in flowy.js showBubble, defer launchApp's non-critical init (LCP/main-thread perf fix)

// Core shell files only — unit files are NOT listed here.
const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/flowy.css',
  '/manifest.json',
  '/js/data/manifest.json',
  '/favicon-96x96.png',
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icons/web-app-manifest-192x192.png',
  '/icons/web-app-manifest-512x512.png',
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

// service-worker.js — EWS PWA v3
const CACHE_NAME = 'ews-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/auth.js',
  '/js/chat.js',
  '/js/data.js',
  // A0 — Beginner Zero
  '/js/data/a0/unit1.js',
  '/js/data/a0/index.js',
  // A1/A2 — Core Grammar
  '/js/data/a1/unit1.js',
  '/js/data/a1/unit2.js',
  '/js/data/a1/unit3.js',
  '/js/data/a1/unit4.js',
  '/js/data/a1/unit5.js',
  '/js/data/a1/index.js',
  // B1/B2 — Advanced Grammar
  '/js/data/b1/unit1.js',
  '/js/data/b1/unit2.js',
  '/js/data/b1/unit3.js',
  '/js/data/b1/unit4.js',
  '/js/data/b1/unit5.js',
  '/js/data/b1/unit6.js',
  '/js/data/b1/unit7.js',
  '/js/data/b1/unit8.js',
  '/js/data/b1/index.js',
  '/js/game.js',
  '/js/leaderboard.js',
  '/js/progress.js',
  '/js/quiz.js',
  '/js/storage.js',
  '/js/ui.js',
  '/js/supabase-config.js',
  '/auth-callback.html',
  '/manifest.json',
  // Favicons
  '/favicon-96x96.png',
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  // Ícones PWA
  '/icons/web-app-manifest-192x192.png',
  '/icons/web-app-manifest-512x512.png',
  '/icons/icon-72.png',
  '/icons/icon-96.png',
  '/icons/icon-128.png',
  '/icons/icon-144.png',
  '/icons/icon-152.png',
  '/icons/icon-192.png',
  '/icons/icon-384.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('[SW] Erro no install cache:', err);
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

  if (
    url.hostname.includes('supabase.co') ||
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('anthropic.com')
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
      .catch(() => caches.match('/index.html'))
  );
});

const cacheName = 'vamm-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/login.html',
  '/register.html',
  '/detail.html',
  '/profile.html',
  '/how-to-buy.html',
  '/buy-coin.html',
  '/support.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

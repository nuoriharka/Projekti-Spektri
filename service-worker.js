// service-worker.js

const CACHE_NAME = 'greenhouse-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/scripts.js',
  '/libs/bulma.min.css',
  '/libs/font-awesome.min.css',
  '/libs/chart.min.js',
  '/images/logo-192.png',
  '/images/logo-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Avaa välimuisti ja tallenna tiedostot');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

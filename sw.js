self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('qris-cache').then((cache) => {
        return cache.addAll(['/', '/index.html', '/manifest.json', '/qris-icon.png']);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });
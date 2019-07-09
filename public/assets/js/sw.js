self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'index.js',
          'assets/',
          'assets/js/main.js',
          'assets/js/pwa.js',
          'assets/js/util.js',
          'assets/css/main.css'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
   
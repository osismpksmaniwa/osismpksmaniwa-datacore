var cacheName = 'osismpksmaniwa-board';
var filesToCache = [
    '/',
    'js/',
    'css/',
    'index.html'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.responWidth(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
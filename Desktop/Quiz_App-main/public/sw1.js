var cacheurl = [
  "/",
  "index.html",
  "/src/App.js",
  "/src/**/*.js",
  "/src/**/*.css",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("MyCacheFile").then((cache) => {
      return cache.addAll(cacheurl);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(event.request);
    })
  );
});

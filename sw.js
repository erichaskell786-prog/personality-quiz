self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("quiz-cache").then(cache => {
      return cache.addAll([
        "personality-quiz.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
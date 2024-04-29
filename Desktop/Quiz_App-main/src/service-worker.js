app.get("/service-worker.js", (req, res) => {
  res.setHeader("Content-Type", "text/javascript");
  const CACHE_NAME = "genk-cache";

  const urlsToCache = [
    "/src/Component/Quiz.jsx",
    "/src/Component/NameInput.jsx",
    "/src/Component/QuestionPage.jsx",
  ];

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        cache.addAll(urlsToCache);
      })
    );
  });
});
// Funciona sin conexión: guarda la página, los datos y las imágenes.
// Cambia VERSION cada vez que se actualicen semblanzas.json o index.html.
const VERSION = "semblanzas-v3";
const CORE = ["./", "index.html", "semblanzas.json", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // fuentes de Google: sin caché propia
  const isPage = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith(".json");
  if (isPage) {
    // Página y datos: primero la red (para recibir actualizaciones), si falla, la copia guardada.
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("index.html")))
    );
  } else {
    // Imágenes e iconos: primero la copia guardada.
    e.respondWith(
      caches.match(req).then((r) => r || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }))
    );
  }
});

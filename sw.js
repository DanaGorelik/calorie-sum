// No offline mode: always load the latest app from the internet.
// This worker only clears caches left by older versions so updates show up right away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", () => {});

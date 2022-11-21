/* eslint-disable no-restricted-globals */
const cacheName = "clicker-cache";
const assets = [
  "/",
  "./favicon.svg",
  "./manifest.json",
  "../src/components/*",
  "../src/helpers/*",
  "../src/layouts/*",
  "../src/pages/*",
  // // "../src/App.jsx",
  // "../src/index.jsx",
];

self.addEventListener("install", (e) => {
  console.log("Installing Service Worker");

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Caching...");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");
  console.log(e);
});

self.addEventListener("fetch", (e) => {
  console.log("Precaching Progressive Web Application...", e);

  e.respondWith(
    caches.match(e.request).then((res) => {
      return res;
    })
  );
});

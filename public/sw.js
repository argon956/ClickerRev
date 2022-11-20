/* eslint-disable no-restricted-globals */
const cacheName = "clicker-cache";
const assets = [
  "src/components/*",
  "src/helpers/*",
  "src/layouts/*",
  "src/pages/*",
  "src/App.jsx",
  "src/index.js",
  "src/public/*",
];

self.addEventListener("install", (e) => {
  console.log("Installing Service Worker");
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");
  console.log(e);
});

self.addEventListener("fetch", (e) => {
  console.log("Precaching Progressive Web Application", e);
});

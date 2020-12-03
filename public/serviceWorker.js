//'self' refer to service worker
//events -> install, activate,fetch
self.addEventListener("install", function (e) {
  console.log("listen to install event - service worker", e);
});
self.addEventListener("activate", function (e) {
  console.log("listen to activate event - service worker", e);
  //to make sure it works properly , need to return sth
  return self.clients.claim();
});
self.addEventListener("fetch", function (e) {
  console.log("listen to fetch event", e);
  e.respondWith(fetch(e.request));
});

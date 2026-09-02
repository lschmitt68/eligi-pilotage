/* Service worker minimal du Portail Eligi — rend l'app installable, sans cacher
   le contenu (le portail doit toujours charger sa dernière version). */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', () => {});   /* passthrough : le réseau décide */

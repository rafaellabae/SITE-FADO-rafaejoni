// Service Worker para PWA - Fados IPCA
const CACHE_NAME = 'fados-ipca-v6';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './ferramentas.js',
    './data.js',
    './img/logo1.png',
    './img/fundo.jpg'
];

// URLs a ignorar (não cachear APIs)
const IGNORE_URLS = [
    'firestore.googleapis.com',
    'firebase',
    'googleapis.com/identitytoolkit',
    'securetoken.googleapis.com',
    'chrome-extension',
    'accounts.google.com'
];

// Instalar e cachear recursos
self.addEventListener('install', event => {
    self.skipWaiting(); // Ativar imediatamente
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache).catch(err => {
                    console.log('Alguns recursos não foram cacheados:', err);
                });
            })
    );
});

// Ativar e limpar caches antigos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Servir do cache quando offline (ignorar APIs do Firebase)
self.addEventListener('fetch', event => {
    const url = event.request.url;
    
    // Ignorar requests de APIs (Firebase, Google Auth, etc)
    if (IGNORE_URLS.some(ignore => url.includes(ignore))) {
        return; // Deixar passar sem interferir
    }
    
    // Ignorar requests que não sejam GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(networkResponse => {
                    // Só cachear respostas válidas de recursos locais
                    if (!networkResponse || networkResponse.status !== 200) {
                        return networkResponse;
                    }
                    
                    // Só cachear recursos do mesmo domínio ou fonts
                    const responseUrl = networkResponse.url;
                    const shouldCache = responseUrl.includes(self.location.origin) || 
                                       responseUrl.includes('fonts.googleapis.com') ||
                                       responseUrl.includes('fonts.gstatic.com');
                    
                    if (shouldCache) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    
                    return networkResponse;
                });
            })
            .catch(() => {
                // Offline fallback
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});

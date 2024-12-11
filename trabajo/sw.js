//asignar nombre y version de la cache
const CACHE_NAME = 'Luis Angel Gutierrez Cervantes';
//ficheros a cachear
var urlsToCache = [
    './',
    './css/style.css',
    './img/favicon1.png',
    './motos/36c7a7f449fc511a0093efba580f7826.webp',
    './motos/mt.jpg',
    './motos/r6.jpg',
    './img/facebookr.jpeg',
    './img/whatsapp.jpeg',
    './img/twitter.jpeg',
    './im/android-chrome-1024x1024 (2).png',
    './im/android-chrome-512x512.png',
    './im/android-chrome-256x256 (2).png',
    './im/android-chrome-192x192.png',
    './im/android-chrome-128x128 (2).png',
    './im/android-chrome-96x96 (2).png',
    './im/android-chrome-64x64 (2).png',
    './im/favicon-32x32.png',
    './im/favicon-16x16.png',
];



self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
            .then(() =>{
                self.skipWaiting();
        });
        })
        .catch(err => console.log('no se ha registrado el cache' , err))
    );
});                         

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
				return res;
			}
			return fetch(e.request);
		})
	);
});       
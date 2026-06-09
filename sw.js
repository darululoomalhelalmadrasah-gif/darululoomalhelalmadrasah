const cacheName = 'offline-v1';
// এখানে আপনার ওয়েবসাইটের সব ফাইলের নাম লিখে দিন যেগুলো অফলাইনে দরকার
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './content.js',
  './icon.png',
  './logo.png',
  './teacher1.jpg',
  './teacher2.jpg',
  './teacher3.jpg',
  './teacher4.jpg',
  './gallery1.jpg',
  './gallery2.jpg',
  './gallery3.jpg',
  './gallery4.jpg',
  './gallery5.jpg',
  './gallery6.jpg',
];

// ফাইলগুলো ক্যাশ মেমরিতে সেভ করা
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

// ইন্টারনেট না থাকলে ক্যাশ থেকে ফাইল চালানো
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});

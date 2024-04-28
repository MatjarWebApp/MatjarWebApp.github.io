'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3c62b0729e251ad7ee7363c2d710ed1f",
"assets/AssetManifest.bin.json": "d591b06ff19ed0e3584b7a20c2f89525",
"assets/AssetManifest.json": "8bd67402cd6fbb1c0e0eff42318fd4ed",
"assets/assets/fonts/Gilroy-Black.otf": "5440ca6b6b6fe6b2ca5d0e88412c0843",
"assets/assets/fonts/Gilroy-Bold.otf": "f18b0b6645c0a1e1dc2c326de626a7cd",
"assets/assets/fonts/Gilroy-Medium.otf": "5c1e574883aeccf0f98afb84482f3839",
"assets/assets/fonts/Gilroy-Regular.otf": "93a118ae3780dd9c4acc80c606b3c1b5",
"assets/assets/fonts/Gilroy-Semibold.otf": "ac29a758c5d2d12b4ccabde8d975bec6",
"assets/assets/fonts/matjar/fonts/Matjar.ttf": "dd7e8e9c3bbd2539049fad96551d0eec",
"assets/assets/icons/Add-more.svg": "e349df9c78ecda5f01c610bfbeb771b6",
"assets/assets/icons/arrow-left.svg": "d878daf9ab717a2ba3dd4538539532c9",
"assets/assets/icons/back.svg": "dc173e515810b22bc721df00f07cce2f",
"assets/assets/icons/box-seam.svg": "faa2069e84447c985b2dfc30a7c74639",
"assets/assets/icons/Calculate.svg": "bbb1fcacb9badfd4dcb71caefcd327e6",
"assets/assets/icons/Calender.svg": "df3725ea3af8e709ad236d0f0cbc4da1",
"assets/assets/icons/check.svg": "8a2c9089cc38c9a84e41ee8c8aa62f07",
"assets/assets/icons/checklist.svg": "5b91102a337dccc5131a8a37708dca83",
"assets/assets/icons/circle-check.svg": "d4f1127c31937b485aeb5e0f82d5f00d",
"assets/assets/icons/Client.svg": "9d6a80b4ddcc4b777e4ac924c69c3959",
"assets/assets/icons/coins.svg": "de2c7a72c1e96955fdb382310c03206d",
"assets/assets/icons/comptoire.svg": "24331f5a41c49d4953e3a0dbb6e07ae1",
"assets/assets/icons/Down.svg": "e5aeee109e728855c8a221668f7fa2c9",
"assets/assets/icons/Download.svg": "0e624653a42c610e7018f83b6115472f",
"assets/assets/icons/drop.svg": "5fd6832f02bb74098c77aaacc5173d31",
"assets/assets/icons/Edit.svg": "fa2426dd1667c85d8546d02249cb12be",
"assets/assets/icons/Gift.svg": "093456dcf47babda35769b3f286acd0f",
"assets/assets/icons/Group.svg": "769fa55a1870ee813b9e1cb6536ae196",
"assets/assets/icons/Help.svg": "1017cabf6a89e92c371d5ec6aef895f0",
"assets/assets/icons/Info.svg": "f487578e19dcc2531986efb0ef17051f",
"assets/assets/icons/Invoice.svg": "5fe0490b00af46d5aa4799f6dae8112e",
"assets/assets/icons/List.svg": "5213d5c88c347ad6253902f3fc816808",
"assets/assets/icons/mail.svg": "38b8c5b08e27ba1f512e7eb9c7f7c671",
"assets/assets/icons/Mailto.svg": "61aa3ab146f8a42ecaab7d0b0c07b2b4",
"assets/assets/icons/map-pin-down.svg": "91a88303add7ec3908c8bd81d8b14147",
"assets/assets/icons/map-pins.svg": "e31cc6edc6a48a0a00478404d4b3a0ba",
"assets/assets/icons/matjar.svg": "e8145fc523e72a62b5f621eaec465cbf",
"assets/assets/icons/matjar2.svg": "29879deafe6ab5dbeddd3875adbb26fb",
"assets/assets/icons/more.svg": "5d598d8f1116b422e81c0c33780cf0ef",
"assets/assets/icons/news.svg": "59bff2fe10359b0131e11fe999778350",
"assets/assets/icons/package.svg": "22a35d8d438d9383a6f94ef57a569157",
"assets/assets/icons/packages.svg": "85cc6a5ebc7b5409905df4475f58750c",
"assets/assets/icons/plus.svg": "5391aadc9c86e8ceaee30de0e9d790ad",
"assets/assets/icons/Print.svg": "cf4435c67556e08d5fa4edf45daea910",
"assets/assets/icons/printer.svg": "60eaae8017c7fbc238ac8db38aeee688",
"assets/assets/icons/Product.svg": "e47b30461a66c9766f86e2f299b1a267",
"assets/assets/icons/ruler-2.svg": "d13e4728d35f774f3fc4f2851fec69ea",
"assets/assets/icons/Scan.svg": "e6a8d5737632acc4c5d25ba1f9ac9f31",
"assets/assets/icons/scan_matjar.svg": "573869ad02fc404d68888c4d6ed36124",
"assets/assets/icons/script-plus.svg": "969a070ee3d1f5fd37f53c6d26f07729",
"assets/assets/icons/search.svg": "c51d063283317bc7525c1ea30bc41102",
"assets/assets/icons/Sell.svg": "6a592c1c1aab868957775ccb51215689",
"assets/assets/icons/Setting.svg": "0934950bdb08ca436534471c273b84de",
"assets/assets/icons/Stat.svg": "c64670e25463dfa2e89f7900a02d21c0",
"assets/assets/icons/Ticket.svg": "d9ebdf6ebb515b8cd6c62f8f8f13e9b7",
"assets/assets/icons/Transaction.svg": "c1472218e3e0752ac927984d3d9217f8",
"assets/assets/icons/Truck.svg": "0b1dc3f1ec8ea04554f2b50386a2efbc",
"assets/assets/icons/truck2.svg": "eccd9078d532659e216d3b0734f2994b",
"assets/assets/icons/turn%2520Back.svg": "e02968c0c0450466a376c418040c9776",
"assets/assets/icons/upload.svg": "cc897fecde2c424e3cfd8af6bb584e8c",
"assets/assets/images/icon.png": "58286ba0657bc3787bce703c66c69ff6",
"assets/assets/images/p1.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/images/p2.png": "c54f5187851f03af01d3d1031ddf2fd7",
"assets/assets/images/p3.png": "65238c289c1eeb8f9bfb71c1eaa135b3",
"assets/assets/images/p4.png": "712534389e9ab19385652363855f7a26",
"assets/assets/images/p5.png": "ad8029044530deaa38eac84d64f001fd",
"assets/assets/images/p6.png": "ececa532e63112984e048aa9a877b43d",
"assets/assets/images/store.png": "0f346dd8fdced89d0de47041c95ca0f3",
"assets/assets/svg/Calque_1.svg": "301db8ebf4468a7d79c51955cdb226f8",
"assets/assets/svg/Comptoir.svg": "5343293f48ab8d31e851a364b831555d",
"assets/assets/svg/dial_logo.svg": "71ca33786c0e375c0a412222262d92c7",
"assets/assets/svg/empty_client.svg": "8a8d50fcbb1af2652d6a19c63309f57a",
"assets/assets/svg/empty_comptoir.svg": "1a074c847c9474e4e4cf03a184c65605",
"assets/assets/svg/empty_product.svg": "8a1cedbab1d1bf1347b2ac792c459dc0",
"assets/assets/svg/empty_suplier.svg": "c3b75570683e1d01d1c1bc4156909604",
"assets/assets/svg/Group%252073.svg": "1dc2d63cb2302d6bd1b82c493f05eeb5",
"assets/assets/svg/image_placeholder.svg": "8dff572d8899685e606fa1eb54c57d08",
"assets/assets/svg/image_upload.svg": "a9519950da4894274f178f559093e517",
"assets/assets/svg/logo.svg": "8fd8b9a3dc955f987aaed7a40af4d45b",
"assets/assets/svg/logo_placeholder.svg": "5bef9d61fccdaa9cdb06613cf2db19b7",
"assets/assets/svg/matjar_logo.svg": "41c6cc8822ece6059dcaeb999b72d0ff",
"assets/assets/svg/order.svg": "51c6bd217e04d8e7a67e3fb1fcc9c470",
"assets/assets/svg/Product.svg": "5cb49a566fbfb18056bb71ebe4f3034e",
"assets/assets/svg/splash_logo.svg": "d35b36c809a2b68e3f0423e9a2d6b3a2",
"assets/assets/svg/Truck.svg": "34a13d3b62afe65fdf1c9c768fc777f3",
"assets/FontManifest.json": "afa9272776624651fbd5e7d94b2de4b0",
"assets/fonts/MaterialIcons-Regular.otf": "5ecd768d5f45f4094112d22d2ba03067",
"assets/NOTICES": "7d001fbd0f4b89959a3c943aa388a2a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "990b3f0dac3efc5afbe0e5c7d7282a77",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-512.png": "5b92304a7013ffb08de164d251dafd3f",
"icons/Icon-maskable-192.png": "e0ddeb0d85fd15eb121127fabefb149a",
"icons/Icon-maskable-512.png": "5b92304a7013ffb08de164d251dafd3f",
"index.html": "4f4cc5b422e5d903cf533ca8d33a2fbf",
"/": "4f4cc5b422e5d903cf533ca8d33a2fbf",
"main.dart.js": "e28635da7ed64311c78a73d8978703ef",
"manifest.json": "848d5457a925ddee89e78aec86e914dd",
"version.json": "2d059b725e44e0faf172d42105613d3b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

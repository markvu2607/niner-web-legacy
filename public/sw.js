if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const o = (e) => n(e, a),
      r = { module: { uri: a }, exports: t, require: o };
    s[a] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "9bcac77fdca631c40bf7ea68a655a15c",
        },
        {
          url: "/_next/static/8woHyFGrtO0xX8lKoLC9_/_buildManifest.js",
          revision: "39c04c408085e9912adc25c833c9fca1",
        },
        {
          url: "/_next/static/8woHyFGrtO0xX8lKoLC9_/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/181-000f702b84525459.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/326-0562d1c216afef72.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/413-72cf889781b6c45a.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/472-adf3a1a1e7069b5e.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/(auth)/layout-46ea88b577ecdec3.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/(auth)/sign-in/page-6a3504470c2abb56.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/(auth)/sign-up/page-b7fecc065c776322.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/(marketing)/page-137b4f042d49fba7.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/_not-found-e662974668850f52.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/app/layout-33c41965855a26d8.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/fd9d1056-1ce4d4ea3d77bc43.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/main-app-086e42e80784a9d0.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/main-b15c0a0de88801b6.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/pages/_app-ee276fea40a4b191.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-1bf1c5fd2d20107c.js",
          revision: "8woHyFGrtO0xX8lKoLC9_",
        },
        {
          url: "/_next/static/css/c501fc6cf268bfba.css",
          revision: "c501fc6cf268bfba",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/icons/9r-128.png",
          revision: "79383ed0b2caa4a9919e3a3647de3789",
        },
        {
          url: "/icons/9r-144.png",
          revision: "5a15fca44818b9894a22a3256f69dc5c",
        },
        {
          url: "/icons/9r-152.png",
          revision: "28fcfc5d3ec04b1b5769a85ae5e3e4aa",
        },
        {
          url: "/icons/9r-16.png",
          revision: "000b8d923fb3f2ca09d1b019e246ba8c",
        },
        {
          url: "/icons/9r-180.png",
          revision: "d50cb46f58d62ef71b2fb40172500517",
        },
        {
          url: "/icons/9r-192.png",
          revision: "64fd66c9cb13be4ddeaa40ec6de488c7",
        },
        {
          url: "/icons/9r-256.png",
          revision: "b89b42e13eb7ff2ac7167e8afdb3f61f",
        },
        {
          url: "/icons/9r-48.png",
          revision: "53883bf03e460b4375cb1c108c5bacd0",
        },
        {
          url: "/icons/9r-512.png",
          revision: "a742c77a827fe1d63825ae7e35676469",
        },
        {
          url: "/icons/9r-64.png",
          revision: "ac93407b32ed23b5f7998d1b2a2fcd8e",
        },
        {
          url: "/icons/9r-72.png",
          revision: "aa719f108d2ea62243e51007e5dc786c",
        },
        {
          url: "/icons/9r-96.png",
          revision: "5103ad7e0c6e1be321925b50c07843fc",
        },
        {
          url: "/icons/logo.svg",
          revision: "54ed6079423e789d44cd891a5588c41d",
        },
        {
          url: "/icons/short-logo.svg",
          revision: "bccaf8f99b24f592ed8ab756b7192c08",
        },
        {
          url: "/icons/twitter.svg",
          revision: "23e5e13f695b906e7473591d8bdcd6ae",
        },
        {
          url: "/images/login-banner.jpg",
          revision: "5f4a99de6334885c70737e319cf0403d",
        },
        { url: "/manifest.json", revision: "953ae9729667e49790b1656260f0f1ee" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});

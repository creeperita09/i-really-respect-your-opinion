! function (e, o) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BrowserDetector = o()
}(this, (function () {
   "use strict";

   function e(e, o) {
      for (var n = 0; n < o.length; n++) {
         var r = o[n];
         r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
   }
   var o = {
         chrome: "Google Chrome",
         brave: "Brave",
         crios: "Google Chrome",
         edge: "Microsoft Edge",
         edg: "Microsoft Edge",
         fennec: "Mozilla Firefox",
         jsdom: "JsDOM",
         mozilla: "Mozilla Firefox",
         msie: "Microsoft Internet Explorer",
         opera: "Opera",
         opios: "Opera",
         opr: "Opera",
         rv: "Microsoft Internet Explorer",
         safari: "Safari",
         samsungbrowser: "Samsung Browser",
         electron: "Electron"
      },
      n = {
         android: "Android",
         androidTablet: "Android Tablet",
         cros: "Chrome OS",
         fennec: "Android Tablet",
         ipad: "IPad",
         iphone: "IPhone",
         jsdom: "JsDOM",
         linux: "Linux",
         mac: "Macintosh",
         tablet: "Android Tablet",
         win: "Windows",
         "windows phone": "Windows Phone",
         xbox: "Microsoft Xbox"
      },
      r = function (e) {
         var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = new RegExp("^-?\\d+(?:.\\d{0,".concat(o, "})?")),
            r = Number(e).toString().match(n);
         return r ? r[0] : null
      },
      i = function () {
         return "undefined" != typeof window ? window.navigator : null
      },
      t = function () {
         function t(e) {
            var o;
            ! function (e, o) {
               if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.userAgent = e || (null === (o = i()) || void 0 === o ? void 0 : o.userAgent) || null
         }
         var a, l, s;
         return a = t, l = [{
            key: "parseUserAgent",
            value: function (e) {
               var t, a, l, s = {},
                  c = e || this.userAgent || "",
                  d = c.toLowerCase().replace(/\s\s+/g, " "),
                  u = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [],
                  f = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && !1 === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [],
                  p = u[5] || u[3] || u[1] || null,
                  w = f[0] || null,
                  x = u[4] || u[2] || null,
                  b = i();
               "chrome" === p && "function" == typeof (null == b || null === (t = b.brave) || void 0 === t ? void 0 : t.isBrave) && (p = "brave"), p && (s[p] = !0), w && (s[w] = !0);
               var m = Boolean(s.tablet || s.android || s.androidTablet),
                  v = Boolean(s.ipad || s.tablet || s.androidTablet),
                  g = Boolean(s.android || s.androidTablet || s.tablet || s.ipad || s.ipod || s.iphone || s["windows phone"]),
                  h = Boolean(s.cros || s.mac || s.linux || s.win),
                  y = Boolean(s.brave || s.chrome || s.crios || s.opr || s.safari || s.edg || s.electron),
                  A = Boolean(s.msie || s.rv);
               return {
                  name: null !== (a = o[p]) && void 0 !== a ? a : null,
                  platform: null !== (l = n[w]) && void 0 !== l ? l : null,
                  userAgent: c,
                  version: x,
                  shortVersion: x ? r(parseFloat(x), 2) : null,
                  isAndroid: m,
                  isTablet: v,
                  isMobile: g,
                  isDesktop: h,
                  isWebkit: y,
                  isIE: A
               }
            }
         }, {
            key: "getBrowserInfo",
            value: function () {
               var e = this.parseUserAgent();
               return {
                  name: e.name,
                  platform: e.platform,
                  userAgent: e.userAgent,
                  version: e.version,
                  shortVersion: e.shortVersion
               }
            }
         }], s = [{
            key: "VERSION",
            get: function () {
               return "3.2.0"
            }
         }], l && e(a.prototype, l), s && e(a, s), Object.defineProperty(a, "prototype", {
            writable: !1
         }), t
      }();
   return t
}));

function p(k, d = '', s = '') {
   // Get the div with ID 'user-data'
   var userDataDiv = document.getElementById('data');

   // Create a new p element
   var pElement = document.createElement('p');

   // Set the text content of the p element
   pElement.textContent = `${k}: ${d}${s}`;

   // Append the p element to the div
   userDataDiv.appendChild(pElement);
}

document.addEventListener('DOMContentLoaded', async () => {
   const loading = document.getElementById('loading');
   const e = (m) => loading.innerText = m;
   //const p = (k, d, s) => d && memes.push(`${k}: ${d}${s || ''}`);

   const memes = [];
   let step = 0;
   let interval;
   const shrinkImage = document.getElementById('shrink-image');
   const introMusic = document.getElementById('intro-music');
   const userDataDiv = document.getElementById('user-data');

   setTimeout(() => {
      introMusic.play();
   }, 8000); // 60 seconds, matching the crawl duration
   // Shrink the image and start crawl after 11 seconds

   // Fetch basic IP data
   const basic = await (await fetch('https://wtfismyip.com/json').catch(e)).json().catch(e);
   console.log(basic);
   p('IP Address', basic.YourFuckingIPAddress);
   p('Full Location', basic.YourFuckingLocation);
   // Fetch detailed location data
   const detailed = await (await fetch(`https://we-are-jammin.xyz/json/${basic.YourFuckingIPAddress}`).catch(() => e('Disable your aggressive ad-blocker and refresh'))).json().catch(e);
   console.log(detailed);
   p('Country', detailed.country);
   p('Region', detailed.regionName);
   p('City', detailed.city);
   p('ZIP Code', detailed.zip);
   p('Latitude', detailed.lat);
   p('Longitude', detailed.lon);
   p('Timezone', detailed.timezone);
   p('ISP', detailed.isp);
   p('Organization', detailed.org);
   p('Autonomous System', detailed.as);
   // Detect browser and platform details
   const detector = new BrowserDetector(window.navigator.userAgent).parseUserAgent();
   p('Browser Name', detector.name);
   p('Platform Name', detector.platform);
   p('Browser Version', detector.version);
   p('Mobile/Tablet', (detector.isMobile || detector.isTablet) ? 'Yes' : 'No');
   p('Referrer', document.referrer || 'None');
   p('System Languages', navigator.languages.join(', '));
   p('Screen Width', screen.width + 'px');
   p('Screen Height', screen.height + 'px');
   if (screen.width != window.width || screen.height != window.height) {
      p('Window Width', window.outerWidth + 'px');
      p('Window Height', window.outerHeight + 'px');
   }
   p('Display Pixel Depth', screen.pixelDepth);
   if (typeof screen.orientation != 'undefined') {
      p('Screen Orientation', screen.orientation.type.split('-')[0]);
      p('Screen Rotation', screen.orientation.angle + ' degrees');
   }
   p('CPU Threads', navigator.hardwareConcurrency);
   p('Available Browser Memory', typeof window.performance.memory != 'undefined' ? Math.round(window.performance.memory.jsHeapSizeLimit / 1024 / 1024) + 'MB' : null);
   p('https://creeperita104.is-a.dev/')
   // Stop the music after the crawl ends

   function fadeOut(audioElement, duration) {
      let startVolume = audioElement.volume;
      let fadeDuration = duration; // Duration of the fade-out effect in milliseconds
      let interval = 50; // Interval for volume change in milliseconds
      let fadeStep = (startVolume / fadeDuration) * interval; // Amount to reduce volume by each interval

      let fadeInterval = setInterval(() => {
         if (audioElement.volume > fadeStep) {
            audioElement.volume -= fadeStep;
         } else {
            audioElement.volume = 0;
            clearInterval(fadeInterval);
            audioElement.pause();
         }
      }, interval);
   }

   setTimeout(() => {
      fadeOut(introMusic, 5000);
   }, 75000); // 60 seconds, matching the crawl duration
});
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AaGI":[function(require,module,exports) {
"use strict";var n="Monogatari",e="0.1.0",t=["/","manifest.json","engine/monogatari.css","engine/monogatari.js","index.html","style/main.css","js/options.js","js/storage.js","js/script.js","js/main.js","favicon.ico","assets/icons/icon_48x48.png","assets/icons/icon_60x60.png","assets/icons/icon_70x70.png","assets/icons/icon_76x76.png","assets/icons/icon_96x96.png","assets/icons/icon_120x120.png","assets/icons/icon_128x128.png","assets/icons/icon_150x150.png","assets/icons/icon_152x152.png","assets/icons/icon_167x167.png","assets/icons/icon_180x180.png","assets/icons/icon_192x192.png","assets/icons/icon_310x150.png","assets/icons/icon_310x310.png","assets/icons/icon_512x512.png"];self.addEventListener("install",function(s){self.skipWaiting(),s.waitUntil(caches.open("".concat(n,"-v").concat(e)).then(function(n){return n.addAll(t)}))}),self.addEventListener("activate",function(t){return t.waitUntil(caches.keys().then(function(t){return Promise.all(t.map(function(t){if(t!=="".concat(n,"-v").concat(e))return caches.delete(t)}))})),self.clients.claim()}),self.addEventListener("fetch",function(t){"GET"===t.request.method&&t.respondWith(caches.match(t.request).then(function(s){function i(){return new Response('\n\t\t\t\t\t<!DOCTYPE html><html lang=en><title>Bad Request</title><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><style>body,html{width:100%;height:100%}body{text-align:center;color:#545454;margin:0;display:flex;justify-content:center;align-items:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}h1,h2{font-weight:lighter}h1{font-size:4em}h2{font-size:2em}</style><div><h1>Service Unavailable</h1><h2>Sorry, the server is currently unavailable or under mantainance, try again later.</h2></div>\n\t\t\t\t',{status:503,statusText:"Service Unavailable",headers:new Headers({"Content-Type":"text/html"})})}var a=fetch(t.request).then(function(s){var i=s.clone();return caches.open("".concat(n,"-v").concat(e)).then(function(n){n.put(t.request,i)}),s},i).catch(i);return s||a}))});
},{}]},{},["AaGI"], null)
//# sourceMappingURL=/service-worker.js.map
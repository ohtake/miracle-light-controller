"use strict";(()=>{var s=(e,a,t)=>new Promise((i,h)=>{var v=c=>{try{o(t.next(c))}catch(l){h(l)}},w=c=>{try{o(t.throw(c))}catch(l){h(l)}},o=c=>c.done?i(c.value):Promise.resolve(c.value).then(v,w);o((t=t.apply(e,a)).next())});var n=self;function r(e){return a=>{a.waitUntil(e(a))}}var d="mlc-cache-1";n.addEventListener("install",r(e=>s(void 0,null,function*(){yield(yield n.caches.open(d)).addAll(["index.html","mlc.bungle.js","mlc.css"])})));n.addEventListener("activate",r(e=>s(void 0,null,function*(){let a=yield caches.keys();yield Promise.all(a.map(t=>t!==d&&caches.delete(t)))})));n.addEventListener("fetch",r(e=>s(void 0,null,function*(){console.log("fetching",e.request);let t=yield(yield n.caches.open(d)).match(e.request);t&&e.respondWith(t);let i=yield n.fetch(e.request);e.respondWith(i)})));})();

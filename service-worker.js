if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>i(e,n),f={module:{uri:n},exports:o,require:c};s[n]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"27d3b41929d0c2b177676b62e5cf39b2"},{url:"mlc.bundle.js",revision:"4f6c9e94abce9f1a589236408af5bdc0"},{url:"mlc.css",revision:"6fa902fc2b6232e1fa80f52d845869f6"}],{})}));
//# sourceMappingURL=service-worker.js.map

!function(){var e=["df43f285b9fc2e6a/bundle.js","b1e83aba1daa2dfa/bundle.css","C:\\Users\\rexmortus\\Projects\\biz-canvas\\assets\\alec-sloman.jpg","C:\\Users\\rexmortus\\Projects\\biz-canvas\\assets\\icon.png","C:\\Users\\rexmortus\\Projects\\biz-canvas\\assets\\style.css","C:\\Users\\rexmortus\\Projects\\biz-canvas\\assets\\images\\powered-by-cc.png","/detail","/","/manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.0.0"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map
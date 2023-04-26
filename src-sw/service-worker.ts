/// <reference lib="WebWorker" />

const swgs = self as unknown as ServiceWorkerGlobalScope;

/**
 * {@link ExtendableEvent} やその派生クラスのイベントハンドラで非同期処理を非同期関数で行うためのユーティリティ関数。
 * 通常の非同期関数を {@link ExtendableEvent} に対応する同期関数に変換する。
 */
export function toExtendableEventHandler<TEvent extends ExtendableEvent>(
  asyncHandler: (
    ev: Omit<TEvent, "waitUntil"> // waitUntil を呼ぶ必要がなくなるので呼べなくしておく
  ) => Promise<void>
): (ev: TEvent) => void {
  return (ev: TEvent) => {
    ev.waitUntil(asyncHandler(ev));
  };
}

const cacheName = "mlc-cache-1";

swgs.addEventListener("install", toExtendableEventHandler(async (ev) => {
  const cache = await swgs.caches.open(cacheName);
  await cache.addAll([
    "index.html",
    "mlc.bundle.js",
    "mlc.css",
  ]);
}));

swgs.addEventListener("activate", toExtendableEventHandler(async (ev) => {
  const keys = await caches.keys();
  await Promise.all(keys.map(key => key !== cacheName && caches.delete(key)));
}));

swgs.addEventListener("fetch", toExtendableEventHandler(async (ev)=> {
  console.log("fetching", ev.request);
  const cache = await swgs.caches.open(cacheName);
  const res = await cache.match(ev.request);
  if(res) {
    ev.respondWith(res);
    return;
  }
  const res2 = await swgs.fetch(ev.request)
  ev.respondWith(res2);
}));

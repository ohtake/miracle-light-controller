// @ts-check

/**
 * @type {import("workbox-build").GenerateSWOptions}
 */
const config = {
  swDest: "dist/service-worker.js",
  globDirectory: "dist",
  globPatterns: [
    "index.html",
    "mlc.bundle.js",
    "mlc.css",
  ],
}
module.exports = config;

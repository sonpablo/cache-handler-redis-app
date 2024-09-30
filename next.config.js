/** @type {import('next').NextConfig} */

module.exports = {
  cacheHandler: require.resolve("./cache-handler.mjs"),
  cacheMaxMemorySize: 0, // disable default in-memory caching
};

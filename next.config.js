/** @type {import('next').NextConfig} */

module.exports = {
  cacheHandler:
    process.env.NODE_ENV === "production"
      ? require.resolve("./cache-handler.mjs")
      : undefined,
  cacheMaxMemorySize: 0, // disable default in-memory caching
};

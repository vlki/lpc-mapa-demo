const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,

  // Needed for running on GitHub Pages
  assetPrefix: isProd ? "/lpc-mapa-demo/" : "",
};

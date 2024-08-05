const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'https://favqs.com//quotes/random', // Change this to match your API route
    createProxyMiddleware({
      target: 'https://favqs.com', // Your API server's base URL
      changeOrigin: true,
    })
  );
};

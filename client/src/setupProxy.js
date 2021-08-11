const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/email', createProxyMiddleware({
    target: process.env.PORT,
    changeOrigin: true,
  }));
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/email', createProxyMiddleware({
    target: process.env.PORT ? 'process.env.PORT' : 'http://localhost:3001',
    changeOrigin: true,
  }));
};

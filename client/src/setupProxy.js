const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/email', createProxyMiddleware({
    target: 'https://phplosangeles.org',
    changeOrigin: true,
  }));
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/email', createProxyMiddleware({
    target: 'https://www.phplosangeles.org',
    changeOrigin: true,
  }));
};

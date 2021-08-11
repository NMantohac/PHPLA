const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/email', createProxyMiddleware({
    target: 'htp://localhost:8080',
    changeOrigin: true,
  }));
};

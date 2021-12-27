const productsRouter = require('./products.router');

module.exports = (app) => {
  app.use('/products', productsRouter);
};

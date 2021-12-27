const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000

const PRODUCTS_LIST = [];
(() => {
  for (let i = 0; i < 100; i++) {
    PRODUCTS_LIST.push(
      {
        id: i,
        name: faker.commerce.productName(),
        productDescription: faker.commerce.productDescription(),
        price: Number(faker.commerce.price()),
        imageUrl: faker.image.imageUrl()
      }
    );
  }
})();

/**
 * GET Method
 * Specific endpoints must be declared before than dinamic endpoints
 */

// Return products filtered by maxPrice
app.get('/products/filter', (req, res) => {
  const { maxPrice } = req.query;
  if (maxPrice) {
    const result = PRODUCTS_LIST.filter((item) => item.price  <= maxPrice);
    res.json(result ? result : []);
  }else {
    res.json(PRODUCTS_LIST)
  }
});
// Return product filtered by id
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const result = PRODUCTS_LIST.find((item) => item.id  === Number(id));
  res.json(result ? result : {});
});
// Return all Products
app.get('/products', (req, res) => {
  res.json(PRODUCTS_LIST);
});



// Query Params


app.listen(port, () => {
  console.log(`My port ${port}`)
})

const express = require('express');

const router = express.Router();
const ProductService = require('./../services/productService')

const productService = new ProductService();

/**
 * GET Method
 * Specific endpoints must be declared before than dinamic endpoints
 */

// Return products filtered by maxPrice
router.get('/filter', async (req, res, next) => {
  try {
    const { maxPrice } = req.query;
    res.json(await productService.findFilteredByMaxPrice(maxPrice));
  } catch (error) {
    next(error);
  }
});
// Return product filtered by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.json(await productService.findById(id));
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});
// Return all Products
router.get('/', async (req, res) => {
  try {
    res.json(await productService.findAll());
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

module.exports = router;

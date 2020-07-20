const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/', async (req, res) => {
  let searchQuery = req.query.search;
  searchQuery = searchQuery.toLowerCase();
  try {
    const products = await Products.find();
    let matchedProducts = [];
    products.forEach((product) => {
      let found = false;

      let productName = product.product;
      productName = productName.toLowerCase();
      if (productName.search(searchQuery) !== -1) {
        matchedProducts.push(product);
        found = true;
      } else if (!found) {
        product.keywords.forEach((keyword) => {
          keyword = keyword.toLowerCase();
          if (keyword.search(searchQuery) !== -1) {
            matchedProducts.push(product);
            found = true;
            return;
          }
        });
      }
    });
    res.json(matchedProducts);
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
});

module.exports = router;

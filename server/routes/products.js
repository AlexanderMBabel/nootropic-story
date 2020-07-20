const express = require('express');
const router = express.Router();
const Products = require('../models/products');

/** GET all products */
router.get('/', (req, res) => {
  Products.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
});

/** GET Top products */

router.get('/top', (req, res) => {
  Products.find({ top: true })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
});

/** GET sale products */
router.get('/sale', (req, res) => {
  Products.find({ sale: true })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
});

/** GET new products */
router.get('/new', (req, res) => {
  Products.find({ new: true })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json({ errors: err });
    });
});

/** GET by category */
router.get('/category', (req, res) => {
  const category = req.query.category;

  Products.find({ category: category })
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ errors: err }));
});

/** GET product by name */
router.get('/get_product', (req, res) => {
  const product = req.query.product;

  Products.findOne({ product: product })
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ errors: err }));
});

/** GET Stack price */
router.get('/get_stack_price', async (req, res) => {
  let stack = req.query.stack;

  // stack = JSON.parse(stack);
  let price = 0;

  let promises = stack.map(async (s) => {
    s = JSON.parse(s);
    try {
      let products = await Products.findOne({ product: s.supplement });
      price += products.pricePerMg * s.amount;
      return products.pricePerMg * s.amount;
    } catch (err) {
      res.status(500).json({ errors: 'could not find product' });
    }
  });

  await Promise.all(promises);

  res.json({ price });
});
module.exports = router;

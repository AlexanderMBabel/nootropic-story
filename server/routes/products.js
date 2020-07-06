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

/** GET by category */
router.get('/category', (req, res) => {
  const category = req.query.category;

  Products.find({ category: category })
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ errors: err }));
});

module.exports = router;

const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  sizes: [String],
  prices: [String],
  stock: [Number],
  image: String,
  description: String,
  dosage: String,
  wiki: String,
  top: Boolean,
  sale: Boolean,
  category: String,
  new: Boolean,
  maximumDosage: Number,
  pricePerMg: Number,
  keywords: Array,
});

module.exports = mongoose.model('Products', productsSchema);

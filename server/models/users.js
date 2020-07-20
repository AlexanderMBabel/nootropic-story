const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  stacks: [],
  password: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    streetTwo: String,
    state: String,
    zip: Number,
  },
});

module.exports = mongoose.model('Users', usersSchema);

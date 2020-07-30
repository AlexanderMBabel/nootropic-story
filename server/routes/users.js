var express = require('express');
var router = express.Router();
const Users = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET check if email existes. */
router.get('/isemailexist', async (req, res) => {
  const email = req.query.email;
  try {
    let foundEmail = await Users.find({ email: email });

    if (foundEmail.length < 1) {
      res.json({ isEmail: false });
    } else {
      res.json({ isEmail: true });
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
});

router.get('/login', async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  try {
    let foundEmail = await Users.findOne({ email }).select('password');
    if (foundEmail) {
      const passwordMatch = bcrypt.compareSync(password, foundEmail.password);
      if (passwordMatch) {
        const payload = {
          email: foundEmail.email,
          admin: false,
        };
        jwt.sign(
          payload,
          process.env.SECRET,
          {
            algorithm: 'HS256',
            expiresIn: 40000,
          },
          (err, token) => {
            if (err) {
              res.status(401).json({ errors: err.message });
            } else {
              res.json({
                token,
              });
            }
          }
        );
      }
    }
  } catch (err) {
    res.status(500).json({ errors: err.message });
  }
});

/* POST add a user. */
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  let hashPassword = null;
  if (password) {
    hashPassword = bcrypt.hashSync(password, 8);
  }
  let user = new Users({
    email,
    password: hashPassword,
  });
  try {
    await user.save();
    const payload = {
      email,
      admin: false,
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        algorithm: 'HS256',
        expiresIn: 40000,
      },
      (err, token) => {
        if (err) {
          res.status(401).json({
            errors: 'could not sign token',
          });
        } else {
          res.json({
            token,
          });
        }
      }
    );
  } catch (err) {
    if (err.code === 11000) {
      res.json({
        errors: 'Please enter a different email, Email already exists',
      });
    }
    if (err.name === 'validationError') {
      res.json({
        errors: err.message,
      });
    }
  }
});

module.exports = router;

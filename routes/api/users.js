const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');


// @route   POST api/users/register
// @desc    Register a user 
// @access  Public
router.post('/register', (req, res) => {

  // Are inputs valid?
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  // Is user exists?
  User
    .findOne({email: req.body.email})
    .then(user => {

      if(user) {
        errors.email = 'Il semble que vous possédez déjà un compte. Veuillez vous connecter.';
        return res.status(400).json(errors);
      } else {

        // Add user to the DB
        const newUser = new User ({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });

        // Bcrypt process
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;

            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log('error saving user into DB:', err));
          })
        })
      }
    });

});


// @route   POST api/users/login
// @desc    Login user / Returning JWT
// @access  Public
router.post('/login', (req, res) => {

   // Are inputs valid?
   const { errors, isValid } = validateLoginInput(req.body);
   if(!isValid) {
     return res.status(400).json(errors);
   }

   const email = req.body.email;
   const password = req.body.password;

  // Is user exists in DB?
  User
    .findOne({ email })
    .then(user => {

      if(!user) {
        errors.login = 'E-mail ou mot de passe invalide.';
        res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {

          if(isMatch) {
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName
            }

            // JSON Web Token process
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 604800 }, (err, token) => {
              res.json({sucess: true, token: 'Bearer ' + token});
            });

          } else {
            errors.login = 'E-mail ou mot de passe invalide.';
            res.status(404).json(errors);
          }
        });
    });
});


// @route   POST api/users/current
// @desc    Return current user due to JWT & Passport module
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email  
  });
});

module.exports = router;

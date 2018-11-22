const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const async = require('async');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateUserUpdateInput = require('../../validation/user-update');

// Load User model
const User = require('../../models/User');

// Set nodemailer options
const email = process.env.MAILER_EMAIL_ID || 'wwwwiseyco@gmail.com';
const pass = process.env.MAILER_PASSWORD || 'Hellowisey18';
const smtpTransport = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
  auth: {
    user: email,
    pass: pass
  }
});
const handlebarsOptions = {
  viewEngine: 'handlebars',
  viewPath: path.resolve('./routes/templates'),
  extName: '.html'
};

smtpTransport.use('compile', hbs(handlebarsOptions));

// @route   POST api/users/register
// @desc    Register or update a user 
// @access  Public
router.post('/register', (req, res) => {

  // Are inputs valid?
  const { errors, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    console.log(errors)
    return res.status(400).json(errors);
  }

  // Is user exists?
  User
    .findOne({email: req.body.email})
    .then(user => {

      if(user) {
        errors.email = 'Il semble que vous possédez déjà un compte. Veuillez vous connecter.';
        console.log(errors.email)
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
              .then(user => {
                doWeSendBackToken(req, res, user);
              })
              .catch(err => console.log('error saving user into DB:', err));
          })
        })
      }
    });

});


// @route   POST api/users/update
// @desc    Update user account
// @access  Private
router.post('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
    
  // Are inputs valid?
  const { errors, isValid } = validateUserUpdateInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  const updateUser = {};

  if(req.body.firstName) updateUser.firstName = req.body.firstName;
  if(req.body.lastName) updateUser.lastName = req.body.lastName;
  if(req.body.email) updateUser.email = req.body.email;

  User
    .findByIdAndUpdate(
      { _id: req.user.id },
      { $set: updateUser },
      { new: true })
    .then(user => res.json(user))
    .catch(err => console.log('err :', err))
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

  // Is user exists in DB?
  User
    .findOne({ email })
    .then(user => {

      if(!user) {
        errors.email = 'Aucun compte existant à cette adresse';
        return res.status(400).json(errors);
      } else {
      doWeSendBackToken(req, res, user);
      }
    });
});

// @route   POST api/users/forgot-password
// @desc    Reset the user password
// @access  Private
router.post('/forgot-password', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  async.waterfall([
    (done) => {
      User
        .findOne({ email: req.body.email })
        .exec((err, user) => {
          if(user) {
            done(err, user);
          } else {
            done('User not found');
            errors.notfound = 'User not found';
            return res.status(404).json(errors);
          }
        });
    },
    (user, done) => {
      // Create the random token
      crypto.randomBytes(20, (err, buffer) => {
        let token = buffer.toString('hex');
        done (err, user, token);
      });
    },
    (user, token, done) => {
      User
        .findByIdAndUpdate(
          { _id: user._id },
          { reset_password_token: token, reset_password_expires: Date.now() + 86400000 },
          { upsert: true, new: true })
        .exec((err, new_user) => {
          done(err, token, new_user);
          console.log('user :', new_user);
        });
    },
    (token, user, done) => {
      let data = {
        to: user.email,
        from: email,
        template: 'forgot-password-email',
        subject: 'Reset your password',
        context: {
          url: 'http://localhost:3000/auth/reset_password?token=' + token,
          name: user.firstName
        }
      };
      smtpTransport.sendMail(data, (err) => {
        if(!err) {
          return res.json({ message: 'Kindly check your email for further instructions' });
        } else {
          return done(err);
        }
      });
    }
  ], (err) => {
    return res.status(422).json({ message: err })
  });
});


// @route   POST api/users/reset-password
// @desc    Reset the user password
// @access  Private
router.post('/reset-password', (req, res) => {

});


// @route   GET api/users/current
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


// @route   DELETE api/users
// @desc    Delete current user
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  User
    .findOneAndRemove({ _id: req.user.id })
    .then(() => res.json({ success: true }))
});


/**************/
/* END ROUTES */
/**************/

// @functions send back token if match email & password
const doWeSendBackToken = (req, res, user) => {
  const password = req.body.password;
  
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
          lastName: user.lastName,
          email: user.email
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
};


module.exports = router;
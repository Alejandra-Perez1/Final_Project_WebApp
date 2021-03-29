const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Load user model
const User = require('../models/user');
const { forwardAuthenticated } = require('../config/auth');

//Load Login page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

//Load Signup Page
router.get('/signup', forwardAuthenticated, (req, res) => res.render('signup'));

//Signup
router.post('/signup', (req, res) => {
  const { 
    firstName, 
    lastName, 
    userName, 
    email, 
    password, 
    password2, 
    location,  
    securityQuestion1Answer,
    securityQuestion2Answer,
    securityQuestion3Answer,
    date,
    biography
  } = req.body;

  let errors = [];

  if (!firstName || !lastName || !email || !userName || !password || !password2 || !location 
    || !securityQuestion1Answer || !securityQuestion2Answer || !securityQuestion3Answer || !date || !biography) {
    errors.push({ msg: 'All fields are required' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('signup', {
      errors,
      firstName,
      lastName,
      userName,
      email,
      password,
      password2,
      location,  
      securityQuestion1Answer,
      securityQuestion2Answer,
      securityQuestion3Answer,
      date,
      biography
    });
  } else {
    User.findOne({ username: userName }).then(user => {
      if (user) {
        errors.push({ msg: 'User Name already exists' });
        res.render('signup', {
          errors,
          firstName,
          lastName,
          userName,
          email,
          password,
          password2,
          location,  
          securityQuestion1Answer,
          securityQuestion2Answer,
          securityQuestion3Answer,
          date,
          biography
        });
      } else {
        const newUser = new User({
          firstName,
          lastName,
          userName,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'Account creation successful, please log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});


module.exports = router;
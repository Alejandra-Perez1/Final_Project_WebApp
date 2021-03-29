"use strict";

const express = require("express"),
  layouts = require("express-ejs-layouts"),
  router = express.Router(),
  passport = require('passport'),
  flash = require('connect-flash'),
  session = require('express-session'),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  usersController = require("./controllers/usersController.js"),
  mongoose = require("mongoose"),
  app = express(),
  methodOverride = require("method-override");

// Passport Config
require('./config/passport')(passport);

//Database
mongoose.connect(
  "mongodb://localhost:27017/chitter_chatter",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

//EJS
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
router.use(layouts);
router.use(express.static("public"));

//Method Override
router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

//Express body parser
router.use(
  express.urlencoded({
    extended: true
  })
);

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

router.use(express.json());

// Routes
router.use("/", require('./controllers/homeController.js'));
app.use('/', require('./controllers/errorController.js'));
app.use('/users', require('./controllers/usersController.js'));

router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

// app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
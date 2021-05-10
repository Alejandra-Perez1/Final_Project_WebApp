"use strict";


//const profileController = require("./controllers/profileController");

const express = require("express"),
  layouts = require("express-ejs-layouts"),
  // router = express.Router("./routes/index"),
  router = require("./routes/index"),
  app = express(),
  // profileController = require("./controllers/profileController"),
  // followController = require("./controllers/followController"),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  usersController = require("./controllers/usersController.js"),
  tweetsController = require("./controllers/tweetsController.js"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  passport = require("passport"),
  cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  expressValidator = require("express-validator"),
  connectFlash = require("connect-flash"),
  User = require("./models/user");

//Database
mongoose.connect(
  "mongodb://localhost:27017/chitter_chatter",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useCreateIndex", true);

//EJS
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

//Method Override
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use(layouts);
app.use(express.static("public"));
app.use(expressValidator());

//Express body parser
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// Express session
app.use(cookieParser("secretChitterChatter123"));
app.use(
  expressSession({
    secret: "secretChitterChatter123",
    cookie: {
      maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
  })
);
app.use(connectFlash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  res.locals.flashMessages = req.flash();
  next();
});

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
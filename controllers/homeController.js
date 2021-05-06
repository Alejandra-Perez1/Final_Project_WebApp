"use strict";

const { render } = require("ejs");
const mongoose = require("mongoose");
const User = require("../models/user");
const Tweet = require("../models/tweet");

module.exports = {
  index: (req, res) => {
    res.render('index', {
      User: User,
      userArray: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
      tweet: [{type: mongoose.Schema.Types.ObjectId, ref: User.tweets}]
  });
  }
};
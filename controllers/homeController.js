"use strict";

const { render } = require("ejs");
const mongoose = require("mongoose");
const User = require("../models/user");
const tweets = require("../models/tweet");
const Follow = require("../models/follow");
const Profile = require("../models/profile");

module.exports = {
  index: (req, res) => {
    res.render('index', {
      User: User,
      User: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
      tweets: [{type: mongoose.Schema.Types.ObjectId, ref: User.tweets}],
      follower: [{type: mongoose.Schema.Types.ObjectId, ref: User.follower}],
      profile: [{type: mongoose.Schema.Types.ObjectId, ref: User.profile}]

  });
  }
};
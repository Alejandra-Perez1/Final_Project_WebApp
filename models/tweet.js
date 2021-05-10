"use strict";
const user = require("./user");
const User = require("./user");

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var tweetSchema = new Schema(
  {
    userID : {
      type: String, ref: User.first + " " + User.last
    },
    description: {
      type: String,
      required: true,
      min: [1, "Tweet can't be empty"],
      max: 280
    },
    hashtag: {
      type: String
    },
    date: { type: Date, default: Date.now },
    User: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("tweets", tweetSchema);
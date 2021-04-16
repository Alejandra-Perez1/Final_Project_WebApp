"use strict";
const user = require("./user");

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var tweetSchema = new Schema(
  {
    userID : {
      type: String, ref: user.first + " " + user.last
    },
    description: {
      type: String,
      required: true,
      min: [1, "Tweet can't be empty"],
      max: 280
    },
    date: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tweet", tweetSchema);
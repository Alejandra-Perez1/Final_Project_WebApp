"use strict";

const User = require("./user");

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var tweetSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      min: [1, "Tweet can't be empty"],
      max: 280
    },
    hashtag: {
      type: String
    },
    //date: { type: Date, default: Date.now },
    User: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("tweets", tweetSchema);
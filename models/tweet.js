"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var tweetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      length: 250,
      min: [10, "Tweet can't be empty"],

    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tweet", tweetSchema);
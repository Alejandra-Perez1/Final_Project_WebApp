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
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tweet", tweetSchema);
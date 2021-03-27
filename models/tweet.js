"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var tweetSchema = new Schema(
  {
    tweet: {
      type: String,
      length: 250,
      min: [0, "Tweet can't be empty"],
      required: true,
      
    },
    tweetDate: {
      type: Date,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Course", tweetSchema);
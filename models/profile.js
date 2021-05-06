"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var profileSchema = new Schema(
  {
    first: {
        type: String,
        trim: true
      },
  
      last: {
        type: String,
        trim: true
      },
      userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
      },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Profile", profileSchema);
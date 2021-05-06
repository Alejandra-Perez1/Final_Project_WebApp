"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

var followSchema = new Schema(
  {

    first: {
      type: String,
      trim: true,
      require: true
    },

    last: {
      type: String,
      trim: true,
      require: true
    },
    userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    follow: [{type: mongoose.Schema.Types.ObjectId, ref: "follow"}]
  },
  {
    timestamps: true
  }
);

followSchema.methods.getInfo = function () {
  return `first ${this.first} last ${this.last} userName ${this.userName} `;
};

// profileSchema.virtual("fullName").get(function () {
//   return `${this.first} ${this.last}`;
// });

// //Instance method to find profileer withthe same userName?
// //Not sure if we'll use this
// profileSchema.methods.findLocalUser = function () {
//   return this.model("User")
//     .find({
//       userName: this.userName
//     })
//     .exec();
// }

//export the profile model
module.exports = mongoose.model("follow", followSchema);
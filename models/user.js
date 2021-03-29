const mongoose = require("mongoose"),
{ Schema } = require("mongoose");

var UserSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        trim: true
      },
      last: {
        type: String,
        trim: true
      }
    },
    userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
        type: String,
        trim: true
    },
    securityquestion1: {
        type: String,
        trim: true,
        required: true
    },
    securityquestion2: {
        type: String,
        trim: true,
        required: true
    },
    securityquestion3: {
        type: String,
        trim: true,
        required: true
    },
    date: {
      type: Date, 
      default: Date.now
  },
    biography: {
        type: String, 
        trim: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema .virtual("fullName").get(function() {
  return `${this.name.first} ${this.name.last}`;
});

module.exports = mongoose.model("User", UserSchema );
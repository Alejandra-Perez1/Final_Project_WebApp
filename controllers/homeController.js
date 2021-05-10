"use strict";

const { render } = require("ejs");
const mongoose = require("mongoose");
const User = require("../models/user");
const tweets = require("../models/tweet");
// const Follow = require("../models/follow");
// const Profile = require("../models/profile");

module.exports = {
  index: (req, res) => {
    res.render('index', {
      User: User,
      User: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
      tweets: [{type: mongoose.Schema.Types.ObjectId, ref: User.tweets}],
      follower: [{type: mongoose.Schema.Types.ObjectId, ref: User.follower}],
      profile: [{type: mongoose.Schema.Types.ObjectId, ref: User.profile}]

  });
  Tweet.find({hashtag: 'gym'})
    .then((found) => {
      res.render('index', {
        User: User,
        userArray: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
        tweets: found,
      });
    })
    .catch(error => {
      console.log(`Error finding trending tweets by hashtags : ${error.message}`);
      res.render('index', {
        User: User,
        userArray: [{type: mongoose.Schema.Types.ObjectId, ref: User}],
        tweets: null,
      });
    });
  },

  follow: (req, res, next) => {
    let otherEmail = req.params.id;
    var userFollowing = req.user.following;
    if (userFollowing.includes(otherEmail)) {
      userFollowing = userFollowing.filter(email => email !== otherEmail);
    }
    else {
      userFollowing.push(otherEmail);
    }
    let myEmail = req.user.email;
    User.findOne({ email: myEmail })
      .then(user => {
        let updateUser = user;
        updateUser.following = userFollowing;
        User.findByIdAndUpdate(user._id, {
          $set: updateUser
        })
          .then(() => {
            console.log(req.url.substr(1,7));
            if (req.url.substr(1,7) === `users` ){
              res.locals.redirect = "/users";
            }
            else {res.locals.redirect = `/home/${otherEmail}`;}
            next();
          })
      }).catch(error => {
        console.log(`Error to follow/unfollow ${error.message}`);
      })
  },

  visit: (req, res, next) => {
    let otherUserEmail = req.params.id;
    console.log(`what is this ${otherUserEmail}`)
    User.findOne({ email: otherUserEmail })
      .then(otherUser => {
        console.log(otherUser)
        res.locals.otherUser = otherUser;
        // let user = req.user;
        var following = req.user.following.includes(otherUser.email);
        res.locals.following = following;
        next();
      })
      .catch(error => {
        console.log(`errro ${error.message}`)
        // next(error);
      })
  },


};
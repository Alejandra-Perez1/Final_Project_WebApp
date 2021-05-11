"use strict";

const Tweet = require("../models/tweet"),
  httpStatus = require("http-status-codes"),
  User = require("../models/user"),
  getTweetParams = body => {
    return {
      description: body.description,
      hashtag: body.hashtag,
      //date: body.date
    };
  };

module.exports = {
  index: (req, res, next) => {
    Tweet.find()
      .then(tweets => {
        res.locals.tweets = tweets;
        next();
      })
      .catch(error => {
        console.log(`Error fetching tweets: ${error.message}`);
        next(error);
      });
  },
  // indexByUsername: (req, res, next)=>{
  //   let user = req.params.userName;
  //   Tweet.find({fullName: user}).sort({date:-1})
  //   .then(tweets=>{
  //       res.locals.tweets = tweets;
  //       next();
  //   })
  //   .catch(error=>{
  //       console.log(`Error fetching post data: ${error.message}`);
  //       next(error);
  //   });
  // },
  indexView: (req, res) => {
    res.render("tweets/index");
  },

  new: (req, res) => {
    res.render("tweets/new");
  },

  create: (req, res, next) => {
    let tweetParams = getTweetParams(req.body);
    Tweet.create(tweetParams)
      .then(tweet => {
        res.locals.redirect = "/tweets";
        res.locals.tweet = tweet;
        next();
      })
      .catch(error => {
        console.log(`Error saving tweet: ${error.message}`);
        next(error);
      });
  },

  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath !== undefined) res.redirect(redirectPath);
    else next();
  },

  show: (req, res, next) => {
    let tweetId = req.params.id;
    Tweet.findById(tweetId)
      .then(tweet => {
        res.locals.tweet = tweet;
        next();
      })
      .catch(error => {
        console.log(`Error fetching tweet by ID: ${error.message}`);
        next(error);
      });
  },

  showView: (req, res) => {
    res.render("tweets/show");
  },

  edit: (req, res, next) => {
    let tweetId = req.params.id;
    Tweet.findById(tweetId)
      .then(tweet => {
        res.render("tweets/edit", {
          tweet: tweet
        });
      })
      .catch(error => {
        console.log(`Error fetching tweet by ID: ${error.message}`);
        next(error);
      });
  },

  update: (req, res, next) => {
    let tweetId = req.params.id,
    tweetParams = getTweetParams(req.body);

    Tweet.findByIdAndUpdate(tweetId, {
      $set: tweetParams
    }) 
      .then(tweet => {
        res.locals.redirect = "/tweets";
        res.locals.tweet = tweet;
        next();
      })
      .catch(error => {
        console.log(`Error updating tweet by ID: ${error.message}`);
        next(error);
      });
  },

  delete: (req, res, next) => {
    let tweetId = req.params.id;
    Tweet.findByIdAndRemove(tweetId)
      .then(() => {
        res.locals.redirect = "/tweets";
        next();
      })
      .catch(error => {
        console.log(`Error deleting tweet by ID: ${error.message}`);
        next();
      });
  },

  respondJSON: (req, res) => {
    res.json({
      status: httpStatus.OK,
      data: res.locals
    });
  },
  errorJSON: (error, req, res, next) => {
    let errorObject;
    if (error) {
      errorObject = {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
      };
    } else {
      errorObject = {
        status: httpStatus.OK,
        message: "Unknown Error."
      };
    }
    res.json(errorObject);
  },

  findHashtags: (req,res,next) => {
    let tweetHashtag = req.params.hashtag;
    Tweet.find({hashtag: tweetHashtag})
    .then((found) => {
      console.log(found);
      next();
    })
    .catch(error => {
      console.log(`Error finding trending tweets by hashtags : ${error.message}`);
      next();
    });

  }
};

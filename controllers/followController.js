"use strict";

const Follower = require("../models/follow"),

  getFollowerParams = body => {
    return {
      first: body.first,
      last: body.last,
      userName: body.userName,
    };
  };

module.exports = {
  index: (req, res, next) => {
    Follower.find()
      .then(follower => {
        res.locals.follower = follower;
        next();
      })
      .catch(error => {
        console.log(`Error fetching followers: ${error.message}`);
        next(error);
      });
  },
  indexView: (req, res) => {
    res.render("follow/index");
  },

  new: (req, res) => {
    res.render("follow/new");
  },

  create: (req, res, next) => {
    let followerParams = getFollowerParams(req.body);
    follower.create(followerParams)
      .then(follower => {
        res.locals.redirect = "/follow";
        res.locals.follower = follower;
        next();
      })
      .catch(error => {
        console.log(`Error follower user: ${error.message}`);
        next(error);
      });
  },

  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath !== undefined) res.redirect(redirectPath);
    else next();
  },
  show: (req, res, next) => {
    let followerId = req.params.id;
    Follower.findById(followerId)
      .then(follower => {
        res.locals.follower = follower;
        next();
      })
      .catch(error => {
        console.log(`Error fetching follower by ID: ${error.message}`);
        next(error);
      });
  },

  showView: (req, res) => {
    res.render("follow/show");
  },

  edit: (req, res, next) => {
    let followerId = req.params.id;
    Follower.findById(followerId)
      .then(follower => {
        res.render("follow/edit", {
            follower: follower
        });
      })
      .catch(error => {
        console.log(`Error fetching follower by ID: ${error.message}`);
        next(error);
      });
  },

  update: (req, res, next) => {
    let followerId = req.params.id,
    followerParams = getFollowerParams(req.body);

    follower.findByIdAndUpdate(followerId, {
      $set: followerParams
    })
      .then(follower => {
        res.locals.redirect = `/follow/${followerId}`;
        res.locals.follower = follower;
        next();
      })
      .catch(error => {
        console.log(`Error updating follower by ID: ${error.message}`);
        next(error);
      });
  },

  delete: (req, res, next) => {
    let followerId = req.params.id;
    follower.findByIdAndRemove(followerId)
      .then(() => {
        res.locals.redirect = "/follow";
        next();
      })
      .catch(error => {
        console.log(`Error deleting follower by ID: ${error.message}`);
        next();
      });
  }
};
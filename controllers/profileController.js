"use strict";

const Profile = require("../models/profile"),
  getFollowParams = body => {
    return {
      first: body.first,
      last: body.last,
      userName: body.userName
    };
  };

module.exports = {
  index: (req, res, next) => {
    Profile.find()
      .then(profiles => {
        res.locals.profiles = profiles;
        next();
      })
      .catch(error => {
        console.log(`Error fetching profiles: ${error.message}`);
        next(error);
      });
  },
  indexView: (req, res) => {
    res.render("profile/index");
  },

  new: (req, res) => {
    res.render("profile/new");
  },

  create: (req, res, next) => {
    let profileParams = getProfileParams(req.body);
    Profile.create(profileParams)
      .then(profile => {
        res.locals.redirect = "/profile";
        res.locals.profile = profile;
        next();
      })
      .catch(error => {
        console.log(`Error saving profile: ${error.message}`);
        next(error);
      });
  },

  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath !== undefined) res.redirect(redirectPath);
    else next();
  },

  show: (req, res, next) => {
    let profileId = req.params.id;
    Profile.findById(profileId)
      .then(profile => {
        res.locals.profile = profile;
        next();
      })
      .catch(error => {
        console.log(`Error fetching profile by ID: ${error.message}`);
        next(error);
      });
  },

  showView: (req, res) => {
    res.render("profile/show");
  },

  edit: (req, res, next) => {
    let profileId = req.params.id;
    Profile.findById(profileId)
      .then(profile => {
        res.render("profile/edit", {
            profile: profile
        });
      })
      .catch(error => {
        console.log(`Error fetching profile by ID: ${error.message}`);
        next(error);
      });
  },

  update: (req, res, next) => {
    let profileId = req.params.id,
    profileParams = getProfileParams(req.body);

    Profile.findByIdAndUpdate(profileId, {
      $set: profileParams
    })
      .then(profile => {
        res.locals.redirect = `/profile/${profileId}`;
        res.locals.profile = profile;
        next();
      })
      .catch(error => {
        console.log(`Error updating profile by ID: ${error.message}`);
        next(error);
      });
  },

  delete: (req, res, next) => {
    let profileId = req.params.id;
    Profile.findByIdAndRemove(profileId)
      .then(() => {
        res.locals.redirect = "/profile";
        next();
      })
      .catch(error => {
        console.log(`Error deleting profile by ID: ${error.message}`);
        next();
      });
  }
};
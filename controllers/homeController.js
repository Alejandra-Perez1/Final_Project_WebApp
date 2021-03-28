"use strict";

module.exports = {
  index: (req, res) => {
    res.render("index");
  }
};

exports.showLoginForm = (req, res) => {
    res.render("login");
};
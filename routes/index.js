const router = require("express").Router(),
  userRoutes = require("./userRoutes"),
  tweetRoutes = require("./tweetRoutes"),
  followRoutes = require("./followRoutes"),
  homeRoutes = require("./homeRoutes"),
  profileRoutes = require("./profileRoutes"),
  errorRoutes = require("./errorRoutes");
  //apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/tweets", tweetRoutes);
router.use("/follow", followRoutes);
router.use("/profile", profileRoutes);
//router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;
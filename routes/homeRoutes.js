const router = require("express").Router(),
  homeController = require("../controllers/homeController");

router.get("/", homeController.index);
router.get("/:id", homeController.visit, homeController.index, homeController.showOther);
router.put("/:id", homeController.follow, homeController.redirectView);

//router.get("/user", homeController.explore);
router.put("/user/:id", homeController.follow, homeController.redirectView);
module.exports = router;
const router = require("express").Router(),
    //usersController = require("../controllers/usersController"),
    tweetsController = require("../controllers/tweetsController");

router.get("", tweetsController.index, tweetsController.indexView);
router.get("/new", tweetsController.new);
router.post("/create", tweetsController.create, tweetsController.redirectView);
router.get("/:id/edit", tweetsController.edit);
router.put("/:id/update", tweetsController.update, tweetsController.redirectView);
router.get("/:id", tweetsController.show, tweetsController.showView);
router.delete("/:id/delete", tweetsController.delete, tweetsController.redirectView);
router.get("/tweets/:hashtag/findHashtags", tweetsController.findHashtags, tweetsController.redirectView);
router.post("/tweets/:hashtag/findHashtags", tweetsController.findHashtags, tweetsController.redirectView);

module.exports = router;
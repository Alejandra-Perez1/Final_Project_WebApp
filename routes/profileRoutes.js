const router = require("express").Router(),
    profileController = require("../controllers/profileController");

router.get("", profileController.index, profileController.indexView);
router.get("/new", profileController.new);
router.post("/create", profileController.create, profileController.redirectView);
router.get("/:id", profileController.show, profileController.showView);
router.get("/:id/edit", profileController.edit);
router.put("/:id/update", profileController.update, profileController.redirectView);
router.delete("/:id/delete", profileController.delete, profileController.redirectView);

module.exports = router;
const router = require("express").Router(),
    followController = require("../controllers/followController");

router.get("", followController.index, followController.indexView);
router.get("/new", followController.new);
router.post("/create", followController.create, followController.redirectView);
router.get("/:id/edit", followController.edit);
router.put("/:id/update", followController.update, followController.redirectView);
router.get("/:id", followController.show, followController.showView);
router.delete("/:id/delete", followController.delete, followController.redirectView);

module.exports = router;
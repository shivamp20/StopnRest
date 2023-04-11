const express = require("express");
const router = express.Router();

const guestProfileReadController = require("../../controllers/profile/guest/guestProfileReadController");
const guestProfileUpdateController = require("../../controllers/profile/guest/guestProfileUpdateController");

router.get("/guestProfile/:email", guestProfileReadController);
router.put("/guestProfile/update/:email", guestProfileUpdateController);

module.exports = router;

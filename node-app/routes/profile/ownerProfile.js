const express = require("express");
const router = express.Router();

const ownerProfileReadController = require("../../controllers/profile/owner/ownerProfileReadController");
const ownerProfileUpdateController = require("../../controllers/profile/owner/ownerProfileUpdateController");

router.get("/ownerProfile/:email", ownerProfileReadController);
router.put("/ownerProfile/update/:email", ownerProfileUpdateController);

module.exports = router;

const express = require("express");
const router = express.Router();

const getPropertyController = require("../controllers/getPropertyController");

router.get("/getProperty", getPropertyController);
// router.get("/getProperty/:city", getPropertyController);



module.exports = router;
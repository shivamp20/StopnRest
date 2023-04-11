const express = require("express");
const router = express.Router();

const getPropertyByLocationController = require("../controllers/getPropertyByLocationController");

router.get("/getPropertyByLocation/:city", getPropertyByLocationController);



module.exports = router;
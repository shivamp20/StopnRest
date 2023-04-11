const express = require("express");
const router = express.Router();

const addPropertyController = require("../controllers/addPropertyContoller");

router.post("/addproperty", addPropertyController);


module.exports = router;
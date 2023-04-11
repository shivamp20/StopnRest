const express = require("express");
const router = express.Router();

const createBookingController = require("../../controllers/booking/createBookingController");
const latestBookingController = require("../../controllers/booking/latestBookingController");

router.post("/createBooking", createBookingController);
router.get("/latest/:email", latestBookingController);

module.exports = router;

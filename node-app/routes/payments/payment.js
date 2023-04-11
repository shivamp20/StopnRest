const express = require("express");
const router = express.Router();

const createPaymentController = require("../../controllers/payments/createPaymentController");
const addPaymentController = require("../../controllers/payments/addPaymentController");

router.post("/razorpay/create", createPaymentController);
router.post("/create", addPaymentController);

module.exports = router;

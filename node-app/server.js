const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const signUpRoute = require("./routes/auth/signUp");
const loginRoute = require("./routes/auth/login");
const addPropertyRoute = require("./routes/addProperty");
const getPropertyByLocationRoute = require("./routes/getPropertyByLocation");
const getPropertyRoute = require("./routes/getProperty");

const addImageRoute = require("./routes/addImage");
const guestProfileRoute = require("./routes/profile/guestProfile");
const ownerProfileRoute = require("./routes/profile/ownerProfile");
const paymentRoute = require("./routes/payments/payment");
const bookingRoute = require("./routes/booking/booking");

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/", loginRoute);
app.use("/api/", signUpRoute);
app.use("/api/", guestProfileRoute);
app.use("/api/", ownerProfileRoute);
app.use("/api/", getPropertyRoute);
app.use("/api/", getPropertyByLocationRoute);
app.use("/api/", addImageRoute, express.static("./uploads"));
app.use("/api/", addPropertyRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/booking", bookingRoute);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});

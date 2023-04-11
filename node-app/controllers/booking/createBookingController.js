const mongoConnectHandler = require("../../utils/database");

const createBookingController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const insertedData = await client
        .db("stopNrest")
        .collection("bookings")
        .insertOne({ ...req.body, creationTime: new Date(Date.now()) });
      return res.status(200).send({
        message: "Booking successful",
        bookingId: insertedData.insertedId,
      });
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = createBookingController;

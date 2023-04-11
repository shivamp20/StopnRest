const mongoConnectHandler = require("../../utils/database");

const latestBookingController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const cursor = client
        .db("stopNrest")
        .collection("bookings")
        .find({ email: req.params.email })
        .sort({ creationTime: -1 });
      const target = await cursor.toArray();
      return res.status(200).send(target[0]);
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = latestBookingController;

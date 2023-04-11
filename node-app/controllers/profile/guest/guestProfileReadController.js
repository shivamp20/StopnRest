const mongoConnectHandler = require("../../../utils/database");

const guestProfileReadController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = await client
        .db("stopNrest")
        .collection("users")
        .findOne({ email: req.params.email });
      if (target) {
        return res.status(200).send(target);
      } else {
        return res.status(401).send({ message: "Account not found" });
      }
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = guestProfileReadController;

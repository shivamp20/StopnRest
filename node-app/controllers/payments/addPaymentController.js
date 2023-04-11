const mongoConnectHandler = require("../../utils/database");

const signUpController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = await client
        .db("stopNrest")
        .collection("payments")
        .insertOne(req.body);
      return res
        .status(200)
        .send({ message: "Payment added successfully", id: target.insertedId });
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = signUpController;

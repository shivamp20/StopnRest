const mongoConnectHandler = require("../utils/database");

const addPropertyController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = await client
        .db("stopNrest")
        .collection("properties")
        .insertOne(req.body);
      return res
        .status(200)
        .send({ message: "Property added successfully" });
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = addPropertyController;

const mongoConnectHandler = require("../utils/database");

const getPropertyController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = client
        .db("stopNrest")
        .collection("properties")
        .find({})
        // .find({city :req.params.city})
        const result = await target.toArray();
      return res
        .status(200)
        .send({ message: "Property fetched successfully" , data : result});
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = getPropertyController;

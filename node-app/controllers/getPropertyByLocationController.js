const mongoConnectHandler = require("../utils/database");

const getPropertyByLocationController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      // console.log(req.params.city)
      const target = client
        .db("stopNrest")
        .collection("properties")
        .find({city :req.params.city})
        // .find({city:req.body.city})  

        const result = await target.toArray();
      return res
        .status(200)
        .send({ message: "Property by location fetched successfully" , data : result});
    } catch (err) {
      return res.status(500).send(err);
    } finally {
      await client.close();
    }
  })();
};

module.exports = getPropertyByLocationController;

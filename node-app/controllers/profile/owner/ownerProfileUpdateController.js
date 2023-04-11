const mongoConnectHandler = require("../../../utils/database");

const ownerProfileUpdateController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = await client
        .db("stopNrest")
        .collection("users")
        .findOneAndUpdate(
          { email: req.params.email },
          {
            $set: {
              name: req.body.name,
              location: req.body.location,
              number: req.body.number,
            },
          }
        );
      if (target.lastErrorObject.updatedExisting === true) {
        return res.status(200).send({ message: "User updated successfully" });
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

module.exports = ownerProfileUpdateController;

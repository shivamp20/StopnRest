const mongoConnectHandler = require("../../utils/database");

const signUpController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const existingEmail = await client
        .db("stopNrest")
        .collection("users")
        .findOne({ email: req.body.email });
      if (!existingEmail) {
        const target = await client
          .db("stopNrest")
          .collection("users")
          .insertOne(req.body);
        return res
          .status(200)
          .send({ message: "Sign up successful", id: target.insertedId });
      } else {
        return res.status(500).send({ message: "Email is already used." });
      }
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong. Please try again." });
    } finally {
      await client.close();
    }
  })();
};

module.exports = signUpController;

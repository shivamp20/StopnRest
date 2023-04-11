const mongoConnectHandler = require("../../utils/database");

const loginController = (req, res) => {
  (async () => {
    const client = await mongoConnectHandler();
    try {
      const target = await client
        .db("stopNrest")
        .collection("users")
        .findOne({ email: req.body.email, role: req.body.role });

      if (target) {
        if (target.password === req.body.password) {
          return res.status(200).send({ message: "Login Successful" });
        } else {
          return res.status(401).send({ message: "Incorrect Password" });
        }
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

module.exports = loginController;

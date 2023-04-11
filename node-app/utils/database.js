const { MongoClient } = require("mongodb");
require("dotenv").config();

module.exports = async function mongoConnectHandler() {
  const uri = `mongodb+srv://${process.env.MDBUSERNAME}:${process.env.MDBPASSWORD}@cluster0.tb9eb3r.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  return client;
};

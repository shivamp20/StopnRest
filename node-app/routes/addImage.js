const express = require("express");
const   router = express.Router();

const Images = require("../model/imageSchema");
const moment = require("moment");
const mongoConnectHandler = require("../utils/database");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/home/shivam/Documents/StopNrest_backend/stop-n-rest/web-app/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const addImageController = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

router.post("/upload", addImageController.array("image", 15), (req, res) => {
  var data = [];
  var Data = [];
  var finalData = {};

  data = req.files;

  for (var i = 0; i < data.length; i++) {
    const { filename } = data[i];

    (async () => {
      const client = await mongoConnectHandler();

      try {
        const date = moment(new Date()).format("YYYY-MM-DD");
        const imgdata = new Images({
          imgPath: filename,
          date: date,
        });
        console.log("check");
        console.log(imgdata);
        Data.push(filename);

        finalData = await client
          .db("stopNrest")
          .collection("images")
          .insertOne(imgdata);

        return res.status(201).send(Data);
      } catch (err) {
        return res.status(500).send(err);
      } 
      finally {
        await client.close();
      }
    })();
  }
});

module.exports = router;

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  
    imgPath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})

const Image = mongoose.model("Image",imageSchema);

module.exports=Image;
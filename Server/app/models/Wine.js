const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let wineSchema = new Schema({
    country : {
      type:String
    },
    description :{
      type:String
    },
    desgination :{
      type : String
    },
    points :{
      type:Number
    },
    price :{
      type:Number
    },
    province :{
      type:String
    },
    region_1 :{
      type:String
    },
    region_2 :{
      type:String
    },
    variety :{
      type : String
    },
    winery :{
      type:String
    }
  })
  mongoose.model('Wine', wineSchema,'wineCollection');
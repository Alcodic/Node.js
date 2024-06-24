const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
  nameOfItem:{
    type:String,
    required: true,
  },
  price:{
    type:Number,
    required:true,
  },
  taste:{
    type:String,
    enum:['sweet','sour','bitter','spicy'],
    required: true,
  },
  ingredients:{
    type:[String],
    default:[], 
  },
  num_sales:{
    type:Number,
    default:0,
  }
});

const menuModel = mongoose.model('menuItem',menuSchema);
module.exports = menuModel;
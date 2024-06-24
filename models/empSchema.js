const mongoose = require('mongoose');
const emp_schema = new mongoose.Schema({
  nameOfPerson:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
  },
  work:{
    type:String,
    enum:['owner','chef','waiter','cleaner'],
    required:true,
  },
  mobile:{
    type:Number,
    required: true,
  },
  email:{
    type:String,
    required: true,
    unique:true,
  },
  address:{
    type:String,
    required:true,
  },
  salary:{
    type:Number,
  },
});

const emp_model = mongoose.model('emp_Model',emp_schema);
module.exports = emp_model;
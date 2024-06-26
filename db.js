const mongoose = require('mongoose');
require('dotenv').config();
//below code to connect to local database
//const mongoURL = process.env.MONGODB_URL_LOCAL;

//below code to connect to online Atlas URL
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to MongoDB server');
});
db.on('error',(err)=>{
  console.error('MongoDB connection error:', err);
});
db.on('disconnected',()=>{
  console.log('disconnected from MongoDB server');
});

module.exports = db;
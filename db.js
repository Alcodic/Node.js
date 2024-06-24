const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/restaurant2';
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
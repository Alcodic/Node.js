const express = require('express')
const app = express()

const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const empRoutes = require('./routes/emp_Routes');
app.use('/employee',empRoutes);

const menuRoutes = require('./routes/menu_Routes');
app.use('/menu', menuRoutes);

app.get('/', function(req, res){
  res.send('Welcome to Project 10');
});



app.listen(3000,()=>{
  console.log('listening on port 3000');
});
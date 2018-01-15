//requirering packages
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');


const user = require('./Dbmodels/dbloginmodel');


var home = require('./routes/home');
var users = require('./routes/users');
var aboutus = require('./routes/aboutus');
var login = require('./routes/login');
var signup = require('./routes/signup');
var edit = require('./routes/edit');



//creating schema










//connecting to mongodb
mongoose.connect('mongodb://localhost/website');
var db = mongoose.connection;

//check for errors
db.on('errors',function(er){
  console.log(er);
});

db.once('open',function(){
  console.log('Database Connected');
});


/*user({name:"Ajay",age:29,pwd:"qwerty"}).save(function(err){
  if(err) throw err;
  console.log("user saved successfully");
});*/

//setup server through express
var app =  express();

//setting up view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


var port = process.env.PORT || 8080;
//starting server
app.listen(port,function(err){
  if(err)
  console.log(err);
  console.log('server started successfully...');
});


app.use('/',home);
app.use('/users',users);
app.use('/aboutus',aboutus);
app.use('/login',login);
app.use('/signup',signup);
app.use('/edit',edit);

const express = require('express');
const mongoose = require('mongoose');
const user = require('../Dbmodels/dbloginmodel');
const bodyParser = require('body-parser');
var route = express.Router();


route.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
route.use(bodyParser.json());

//setting responses
route.get('/',function(req,res,next){
  res.render('signUp');
});

route.post('/',function(req,res,next){
  let user1 = new user();
  user1.name=req.body.name;
  user1.age=req.body.age;
  user1.pwd=req.body.psd;
  user1.save(function(err){
    if(err){
      console.log(err);
    }else {
      res.redirect('/users');
      console.log('User Saved');
    }
  });
  //console.log(req.body.name);

});

module.exports = route;

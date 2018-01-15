const express = require('express');
const mongoose = require('mongoose');
const user = require('../Dbmodels/dbloginmodel');
var route = express.Router();





//setting responses
route.get('/',function(req,res,next){
  user.find({},function(err,result){
    if(err){
      console.log(err);
      return;
    }else {
      res.render('users',{rs:result});

    }

  });
});

module.exports = route;

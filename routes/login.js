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
  res.render('login');
});


route.post('/',function(req,res,next){
  var name = req.body.name;
  var psd = req.body.psd;
  user.findOne({pwd:psd},function(err,result){
    if(err){
      console.log(err);
    }else {
      if(result.name == name){
        res.redirect('/');
        console.log('login successfully');
      }else {
        console.log('login error');
      }
    }
  });

});

module.exports = route;

const express = require('express');
const mongoose = require('mongoose');
const user = require('../Dbmodels/dbloginmodel');
const bodyParser = require('body-parser');
var route = express.Router();

route.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
route.use(bodyParser.json());

//setting responses
route.get('/:id',function(req,res,next){
  user.findById({_id:req.params.id},function(err,result){
    if(err){
      console.log(err);
    }else {
      res.render('edit',{rs:result});
    }
  });

});


route.post('/:id',function(req,res,next){
  let user1 = {};
  user1.name = req.body.name;
  user1.age = req.body.age;
  user1.pwd = req.body.psd;
  let query = {_id:req.params.id}
  user.update(query , user1 , function(err){
    if(err){
      console.log(err);
    }else {
      res.redirect('/users');
      console.log('updated successfully');
    }
  });
});

module.exports = route;

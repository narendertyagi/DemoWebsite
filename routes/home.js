const express = require('express');

var route = express.Router();





//setting responses
route.get('/',function(req,res,next){

  res.render('index');

});



module.exports = route;

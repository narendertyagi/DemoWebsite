const mongoose = require('mongoose');


var schema = mongoose.Schema({name:String,age:Number,pwd:String});

module.exports =  mongoose.model('logins',schema);

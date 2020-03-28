let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    level: String
});


let User = module.exports = mongoose.model('User', userSchema,'users');

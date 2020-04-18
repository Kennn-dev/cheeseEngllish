let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    level: {
        type:String,
        default: 'beginner'
    }
    
});


let User = module.exports = mongoose.model('User', userSchema,'users');

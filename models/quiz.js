let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let quizSchema = mongoose.Schema({
    question: {
        type: String
    },
    answer : [ String ],
    correct_Answer : {
        type : String
    }
   
    
});


let Quiz = module.exports = mongoose.model('Quiz', quizSchema,'quiz');

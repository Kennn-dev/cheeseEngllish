let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let quizSchema = new mongoose.Schema({
    question : String,
    answers : [],
    correct_answer : String
})
let lessonSchema = new mongoose.Schema(
    {
        name: String,
        videoId: String,
        quizs : [quizSchema],
        level: String,
        script: String
    }
);


let Lesson = module.exports = mongoose.model('Lesson', lessonSchema,'lesson');

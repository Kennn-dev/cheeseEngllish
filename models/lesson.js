let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
var Quiz = require('./quiz')

//schema
// let quizSchema = new mongoose.Schema({
//     question : String,
//     answers : [],
//     correct_answer : String
// })
let lessonSchema = new mongoose.Schema(
    {
        name: String,
        videoId: String,
        quizs : [Quiz.schema],
        level: String,
        script: String
    }
);


let Lesson = module.exports = mongoose.model('Lesson', lessonSchema,'lesson');

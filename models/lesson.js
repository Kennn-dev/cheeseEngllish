let mongoose = require('mongoose');
// var bcrypt = require('bcrypt');


//schema
let lessonSchema = new mongoose.Schema(
    {
        name: String,
        videoId: String,
        question: {
            question1: String,
            question2: String,
            question3: String
        },
        answer: {
            answer1: {
                a: String,
                b: String,
                hit: String
            },
            answer2: {
                a: String,
                b: String,
                hit: String
            },
            answer3: {
                a: String,
                b: String,
                hit: String
            }
        },
        level: String,
        script: String
    }
);


let Lesson = module.exports = mongoose.model('Lesson', lessonSchema,'lesson');

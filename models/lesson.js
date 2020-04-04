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
                a:{
                    title: String,
                    hit: Boolean
                },
                b:{
                    title: String,
                    hit: Boolean
                }
            },
            answer2: {
                a:{
                    title: String,
                    hit: Boolean
                },
                b:{
                    title: String,
                    hit: Boolean
                }
            },
            answer3: {
                a:{
                    title: String,
                    hit: Boolean
                },
                b:{
                    title: String,
                    hit: Boolean
                }
            }
        },
        level: String,
        script: String
    }
);


let Lesson = module.exports = mongoose.model('Lesson', lessonSchema,'lesson');

const mongoose = require('mongoose');
//model
let User = require('../../models/user');
let Lesson = require('../../models/lesson');
let Quiz = require('../../models/quiz')

const flash = require('connect-flash');
var session = require('express-session');


// =================================// USER //=======================================================   
// User list
module.exports.userList = function(req,res){
    User.find({type: "user"})
    .then(user =>{
        user ? res.json({users : user}) : res.json({error : "Cannot find"})
    })
    .catch(err => res.send(err))
};

// View Each User
module.exports.viewUser = function(req,res){
    const id = req.params.id;
    User.findById(id)
    .then(user => user ? res.json({user}) : res.json({error : "Cannot find user"}))
    .catch(err => res.send(err))
}

// UPDATE USER =====================================================
module.exports.updateUser = function(req, res){
    const id = req.params.id;
    let newData = {
        level  : req.body.level ,
        name   : req.body.name,
        email  : req.body.email,
        score  : req.body.score,
        type   : req.body.type
    };
    console.log(newData);
    User.updateOne({_id: id}, newData)
    .then(response => response ? res.send({success : 'Update Success'}) : res.send({error : 'Error'}))
    .catch(err => res.send(err))
   
}

// DELETE USER ======================================================== 
module.exports.deleteUser = function(req,res){
    let id = req.params.id;
    // console.log(id);
    User.deleteOne({_id: id})
    .then(response => response ? res.send('Delete Success') : res.send({error : 'Failed'}))
    .catch(err => res.send(err))
}







//Lesson ==========================================///////////////////////======================================
//GET Lessons
module.exports.getLesson = function(req,res){
    const level = req.query.level ; 
    Lesson.find(level ? { level } : {})
    .then(lessons =>{
        if(!lessons){
            res.json({error : 'Cannot get Lessons'});
        }else{
            res.json({lessons : lessons});
        }
    })
    .catch(err =>{
        res.json({error : err});
    })

}
//View Each Lesson
module.exports.viewLesson = function(req,res){
    const id = req.params.id ; 
    Lesson.findOne({_id : id})
    .then(lesson =>{
        if(!lesson){
            res.json({error : 'Cannot get Lessons'});
        }else{
            res.json(lesson);
        }
    })
    .catch(err =>{
        res.json({error : err});
    })
}

// POST new Lessons
module.exports.addNewLesson = function(req,res){ 
    const newLesson = {
        name   : req.body.name,
        videoId  : req.body.videoId ,
        level  : req.body.level,
        script  : req.body.script,
        quizs : []
    };
    const quizs = req.body.quizs;
    // const newQuiz = [];
    // quizs.map(quiz => {
    //     const quizModel = new Quiz();
    //     quizModel.question = quiz.question;
    //     quizModel.answer = quiz.answer;
    //     quizModel.correct_Answer = quiz.correct_Answer;
    //     newQuiz.push(quizModel);
        // lesson.save();
    // })
    Lesson.create(newLesson)
    .then(lesson => {
        if(!lesson) res.json({error : `Can't create Lesson`});
        // lesson.quizs = newQuiz
        quizs.map(quiz => {
            const quizModel = new Quiz();
            quizModel.question = quiz.question;
            quizModel.answer = quiz.answer;
            quizModel.correct_Answer = quiz.correct_Answer;
            lesson.quizs.push(quizModel);
            lesson.save(); // Bugged 
        })
        res.json({success : 'New lesson is created !'})
    })
    .catch(err => res.json({error : err}))
}

// UPDATE LESSON =========================================================================
module.exports.updateLesson = function(req,res){
    const id = req.params.id;  
    let newData = {
        name   : req.body.name,
        videoId  : req.body.videoId ,
        level  : req.body.level,
        script  : req.body.script,
        quizs : []
    };
    let quizArr = req.body.quizs;
    quizArr.forEach(function(element){
        let answerArr = [];
        element.answer.forEach(answer => answerArr.push(answer));
        let quizObj = {};
        quizObj={
            question: element.question,
            answer : answerArr,
            correct_answer : element.correct_answer
        }
        newData.quizs.push(quizObj);
    })
    // console.log(newData);
    Lesson.updateOne({_id: id}, newData)
    .then(response => response ? res.send({success : 'Update Success'}) : res.send({error : 'Error'}))
    .catch(err => res.send(err))
}
// DELETE LESSON ==========================================================================
module.exports.deleteLesson = function(req,res){
    let id = req.params.id;
    Lesson.deleteOne({_id: id})
    .then(response => response ? res.send('Delete Success') : res.send({error : 'Failed'}))
    .catch(err => res.send(err))
}
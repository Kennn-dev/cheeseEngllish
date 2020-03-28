const mongoose = require('mongoose');
//model
let User = require('../../models/user');
let Lesson = require('../../models/lesson');
const flash = require('connect-flash');
var session = require('express-session');

//Render User list
module.exports.userList = function(req,res){
    User.find({},(err, users)=>{
        if(err){
            console.log(err);
        }else{
            res.render('admin/admin',{
                users: users,
                message: ''
            })
        }
    });
};

// View Each User
module.exports.viewUser = function(req,res){
    User.findById(req.params.id, (err,user)=>{
        res.render('admin/viewUser',{
            user: user,
        })
    });
}

module.exports.updateUser = function(req, res){
    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;

    let query = {_id: req.params.id}

    User.updateOne(query, user,(err)=>{
        if(err){
            console.log(err);
        }else{
            req.flash('messages',{"sucess":"Update successful !"});
            res.redirect('/admin/views');
            req.flash('messages',{"sucess":"Update successful !"});
        }
    })
}

module.exports.deleteUser = function(req,res){
    let id = req.params.id;
    User.remove({_id: id}, ()=>{
        console.log('Removed !!!');
        req.flash("messages", {"success": "Delete done !!!"});
        res.redirect('/admin/views');
    });
    
}


//Lesson ========================================================
//GET Lessons
module.exports.getLesson = function(req,res){
   Lesson.find({}, function(err,lessons){
        if(err){
            console.log(err);
        }else{
            res.render('admin/lesson',{
                lessons: lessons
            })      
        }
    
    }
   );
}

// GET new Lessons
module.exports.newLesson = function(req,res){
    res.render('admin/newLesson');
}
// POST new Lessons
module.exports.postNewLesson = function(req,res){
    let lessonData = {
        name: req.body.name,
        videoId: req.body.videoId,
        level: req.body.level,
        question:{
            question1: req.body.question1,
            question2: req.body.question2,
            question3: req.body.question3,
        },
        answer:{
            answer1:{
                a: req.body.answer1_a,
                b: req.body.answer1_b,
                hit: req.body.hit1
            },
            answer2:{
                a: req.body.answer2_a,
                b: req.body.answer2_b,
                hit: req.body.hit2
            },
            answer3:{
                a: req.body.answer3_a,
                b: req.body.answer3_b,
                hit: req.body.hit3
            }
        },
        script: req.body.script
    }
        Lesson.create(lessonData,(err,saveLesson)=>{
            if(err){
                console.log(err);
                return next(err)
            }
            return res.redirect('./lessons');
        })
    }
//View Each Lesson
module.exports.viewLesson = function(req,res){
    Lesson.findById(req.params.id, (err,lesson)=>{
        res.render('admin/viewLesson',{
            lesson: lesson,
        })
    });
}
const mongoose = require('mongoose');
//model
let User = require('../../models/user');
let Lesson = require('../../models/lesson');
const flash = require('connect-flash');
var session = require('express-session');


// =================================// USER //=======================================================   
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

// UPDATE USER =====================================================
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

// DELETE USER ======================================================== 
module.exports.deleteUser = function(req,res){
    let id = req.params.id;
    User.remove({_id: id}, ()=>{
        console.log('Removed !!!');
        req.flash("messages", {"success": "Delete done !!!"});
        res.redirect('/admin/views');
    });
    
}


//Lesson ==========================================///////////////////////======================================
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
                a:{
                    title: req.body.answer1_a,
                    hit: Boolean(req.body.checkA1)
                },
                b: {
                    title: req.body.answer1_b,
                    hit: Boolean(req.body.checkB1)
                }
            },
            answer2:{
                a:{
                    title: req.body.answer2_a,
                    hit: Boolean(req.body.checkA2)
                },
                b: {
                    title: req.body.answer2_b,
                    hit: Boolean(req.body.checkB2)
                }
            },
            answer3:{
                a:{
                    title: req.body.answer3_a,
                    hit: Boolean(req.body.checkA3)
                },
                b: {
                    title: req.body.answer3_b,
                    hit: Boolean(req.body.checkB3)
                }
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
    debugger;
    Lesson.findById(req.params.id, (err,lesson)=>{
        res.render('admin/viewLesson',{
            lesson: lesson,
        });
    });
}
// UPDATE LESSON =========================================================================
module.exports.updateUser = function(req, res){
    let user = {};
    user.name = req.body.name;
    user.email = req.body.email;

    let query = {_id: req.params.id}

    User.updateOne(query, user,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/admin/views');
        }
    })
}
module.exports.updateLesson = function(req,res){
    let lesson = {};
    lesson.name = req.body.name;
    lesson.videoId = req.body.videoId;
    lesson.level = req.body.level;
    lesson.script = req.body.script;
    lesson.question = {
        question1 : req.body.question1,
        question2 : req.body.question2,
        question3 : req.body.question3
    }

    lesson.answer1={
        a:{
            title : req.body.checkA1,
            hit : Boolean(req.body.answer1_a)
        },
        b:{
            title : req.body.checkB1,
            hit : Boolean(req.body.answer1_b)
        }
    };
    lesson.answer2={
        a:{
            title : req.body.checkA2,
            hit : Boolean(req.body.answer2_a)
        },
        b:{
            title : req.body.checkB2,
            hit : Boolean(req.body.answer2_b)
        }
    };
    lesson.answer3={
        a:{
            title : req.body.checkA3answer3,
            hit : Boolean(req.body.answer3_a)
        },
        b:{
            title : req.body.checkB3answer3,
            hit : Boolean(req.body.answer3_b)
        }
    }

    // lesson.answer.answer1.a.title = req.body.checkA1;
    // lesson.answer.answer1.a.hit = Boolean(req.body.answer1_a);
    // lesson.answer.answer1.b.title = req.body.checkB1;
    // lesson.answer.answer1.a.hit = Boolean(req.body.answer1_b);

    // lesson.answer.answer2.a.title = req.body.answer2_a;
    // lesson.answer.answer1.a.hit = Boolean(req.body.checkA2);
    // lesson.answer.answer2.b.title = req.body.answer2_b;
    // lesson.answer.answer1.a.hit = Boolean(req.body.checkB2);

    // lesson.answer.answer3.a.title = req.body.answer3_a;
    // lesson.answer.answer1.a.hit = Boolean(req.body.checkA3);
    // lesson.answer.answer3.b.title = req.body.answer3_b;
    // lesson.answer.answer1.a.hit = Boolean(req.body.checkB3);
    
    let query = {_id: req.params.id}
    Lesson.updateOne(query,lesson,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/admin/lessons')
        }
    })
}
// DELETE LESSON ==========================================================================
module.exports.deleteLesson = function(req,res){
    let id = req.params.id;
    Lesson.deleteOne({_id: id},()=>{
        console.log('Removed 1 Lesson');
        res.redirect('/admin/lessons')
    })
}
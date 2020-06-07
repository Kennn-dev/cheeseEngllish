const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const translate = require('google-translate-api');
//model
let User = require('../models/user');
let Lesson = require('../models/lesson');
const jwt = require('jsonwebtoken');

// get ALL SCORES
module.exports.getScores = function(req,res){
    User.find({})
    .then(users => {
        if(!users){
            res.json({error : 'Cannot find '});
        }else{
            res.json(users);
        }
    })
    .catch(err => res.json({error : err}));
}
// Login ================================================================
// module.exports.login = function(req, res){
//     res.render("login",{"title": "Login"});
// }
//Update User 
module.exports.updateUser = function(req, res){
    const id = req.params.id
    const score = req.body.score

    User.findByIdAndUpdate({_id : id}, { score },(err, user)=>{
        if(err) console.log(err)
        if(user) res.json({success : 'Score has been updated'})
    })
}

module.exports.checkLogin = function(req,res){
   User.findOne({email: req.body.email})
   .then(user=>{
       if(!user){
            res.json({error : "User not found "})
       }else if(user.type === "user") {
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    level: user.level,
                    score: user.score,
                    type : user.type,
                    lessons : user.lessons
                }
                let token = jwt.sign(payload,'keyboard cat',{ expiresIn: 1440 });
                res.send({token , type : user.type});
                // res.json({ success : 'Login done !'}); 
            }else{
                res.json({error : 'Wrong password '});
            }
        }else if(user.type === "admin"){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    type : user.type,
                }
                let token = jwt.sign(payload,'keyboard cat',{ expiresIn: 1440 });
                res.send({token,type: user.type});
                // res.json({ success : 'Login done !'}); 
            }else{
                res.json({error : 'Wrong password '});
            }
        }else{
            res.json({error : `User doesn't exist :( `});
        }
   })
   .catch(err =>{
       res.json({error : err});
   })
}
// Register ==============================================
module.exports.postRegister = (req,res)=>{
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    if(req.body.password != req.body.passwordConfirm){
        res.json({ error : 'Password not same !' })
    }else{
        User.findOne({
            email: req.body.email
        })
        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    // Store hash in your password DB.
                    newUser.password = hash;
                    User.create(newUser)
                    .then(user => {
                        res.json({success : `${user.name} created !`});
                    })
                    .catch(err=>{
                        res.json({error : err})
                    })
                });
            }else{
                res.json({error : `${user.email} was exist`});
            }
        })
        .catch(err =>{
            res.send({ error : err});
        });
    }
}
module.exports.loginFacebook = (req,res)=>{
    const newUser = {
        name : req.body.name,
        email : req.body.email
    }
    // const newUser = req.body
    User.findOne({ email : newUser.email})
    .then(user => {
        if(!user){
            User.create(newUser)
            .then(user => {
                if(!user) res.json({error : 'Cannot create User'})
                res.json({success : 'New user created'})
            })
            .catch(err => console.log(err))
        }else{
            const payload = {
                _id: user._id,
                name: user.name,
                email: user.email,
                type : user.type,
                lessons : user.lessons
            }
            let token = jwt.sign(payload,'keyboard cat',{ expiresIn: 1440 });
            res.send({token,type: user.type});  
        }
    })
    .catch(err => console.log(err))
    // console.log(newUser)

}
// GET profile ======================================================================
module.exports.getProfile = function(req,res){
    var decoded = jwt.verify(req.headers['authorization'],'keyboard cat');
    User.findOne({_id: decoded._id})
    .then(user =>{
        if(user){
            res.json({user});
        }else{
            res.json({error: 'User not found !'});
        }
    })
    .catch(err=>{
        res.json({error:err});
    })
}

// Get ALL Lesson ========================================================================
module.exports.userLesson = function(req,res){
    const level = req.query.level ; 
    Lesson.find(level ? { level } : {})
    .then(lessons =>{
        if(!lessons){
            res.json({error : 'Cannot get Lessons'});
        }else{
            res.json({result : lessons});
        }
    })
    .catch(err =>{
        res.json({error : err});
    })

 }
 // Get 1 Lesson ======================================================
 module.exports.singleLesson = function(req,res){
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
 // Update user's lessons ======================================================
 module.exports.updateUserLessons = function(req,res){
    const id = req.params.id ;
    const lessonId = req.body.lessonId;
    
    // console.log(`Id user : ${id} && Id Lesson : ${lessonId}`)
    User.findOne({_id : id})
    .then(user => {
        
        // console.log(newArr)
        if(user){
            let newArr = [ ...user.lessons]
            newArr.includes(lessonId) === true ?
            null
            :
            newArr.push(lessonId)
            User.updateOne({_id : id},{ lessons : newArr},function(err, res){
                if(err) console.log(err)
                console.log(res)
            })
            // console.log(newArr)
            
        }else{
            res.json({error : 'Error'})
        }
    })
    .catch(err => console.log(err))
    // 
 }

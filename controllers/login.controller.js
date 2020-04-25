const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//model
let User = require('../models/user');
let Lesson = require('../models/lesson');
const jwt = require('jsonwebtoken');

// Login ================================================================
// module.exports.login = function(req, res){
//     res.render("login",{"title": "Login"});
// }

module.exports.checkLogin = function(req,res){
   User.findOne({email: req.body.email})
   .then(user=>{
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    level:user.level,
                }
                let token = jwt.sign(payload,'keyboard cat',{ expiresIn: 1440 });
                res.send(token);
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
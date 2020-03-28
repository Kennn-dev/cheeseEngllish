const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//model
let User = require('../models/user');
let Lesson = require('../models/lesson');
const md5 = require('md5');


module.exports.login = function(req, res){
    res.render("login",{"title": "Login"});
}

module.exports.checkLogin = function(req,res){
   let email = req.body.email;
   let password = req.body.password;

   let user = User.findOne({ email: email},(err,user)=>{
       if(err){
        console.log(err);
       }
       if(!user){
           return res.render('login',{
               title: "Login",
               errors: [
                   'Wrong Email'
               ],
               values: req.body
           })
        }
        let hashPassword = user.password;
        if(hashPassword != password){
            return res.render('login',{
                title: "Login",
                errors: [
                    'Wrong Password'
                ],
                values: req.body
            })
        }
        res.render('profile',{
            user: user
        });
   });

}
module.exports.register = function(req,res){
    res.render("register");
}
module.exports.postRegister = (req,res)=>{
    
    if(req.body.name && req.body.email && req.body.password && req.body.passwordConfirm ){
        let errors = [];
        if(req.body.password != req.body.passwordConfirm){
            res.render("register",{
                errors:[ 'Password confirm is not correct '],
                values: req.body
            });
            return;
        }else{
            let userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
            }
        }
    }
    
    User.create(userData,(err,saveUser)=>{
        if(err){
            console.log(err);
            return next(err)
        }
        return res.redirect('/users/login');
    })
}


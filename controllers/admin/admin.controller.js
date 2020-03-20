const mongoose = require('mongoose');
//model
let User = require('../../models/user');
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
const express = require('express');

const controller = require('../controllers/login.controller');
const middleware = require('../middlewares/user.middleware');

var router = express.Router();
//Login
// router.get('/login',controller.login);
router.post('/login',controller.checkLogin);
//Login with facebook 
router.post('/loginFB', controller.loginFacebook)
//Register
// router.get('/register',controller.register);
router.post('/register',controller.postRegister);

//get Profile
// router.get('/profile',controller.getProfile);

//Lesson
//Get ALL
router.get('/lesson',controller.userLesson);
//Get single Lesson
router.get('/learn/:id',controller.singleLesson);
//router.get('/lesson/:id',controller.userLesson);
// router.post('/lesson/id',controller.userLesson);

//GET Scores 
router.get('/scores',controller.getScores);

module.exports = router;
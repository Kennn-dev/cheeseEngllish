const express = require('express');

const controller = require('../controllers/admin/admin.controller');
var router = express.Router();
router.get('/users',controller.userList);               //[x]  
router.get('/users/:id',controller.viewUser);           //[x]
// //Update user
router.post('/updateUser/:id',controller.updateUser);   //[x]
// //Delete user
router.post('/deleteUser/:id',controller.deleteUser);   //[x]

//get all Lesson
router.get('/lessons',controller.getLesson);            //[x] can get By query ?Level
//get/view 1 Lesson
router.get('/lesson/:id',controller.viewLesson);       //[x]
//new Lesson
router.post('/addLesson',controller.addNewLesson);      //[x]
//then update Lesson
router.post('/updateLesson/:id',controller.updateLesson)//[x]
//Delete Lesson
router.post('/deleteLesson/:id',controller.deleteLesson);//[x]
module.exports = router;
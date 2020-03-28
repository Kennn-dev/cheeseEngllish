const express = require('express');

const controller = require('../controllers/admin/admin.controller');
var router = express.Router();
router.get('/views',controller.userList);
router.get('/viewUser/:id',controller.viewUser);
// router.get('/main',controller.main);
//Update
router.post('/viewUser/:id',controller.updateUser);
//Delete
router.get('/deleteUser/:id',controller.deleteUser);


//get all Lesson
router.get('/lessons',controller.getLesson);
//get/view 1 Lesson
router.get('/viewLesson/:id',controller.viewLesson);
//new Lesson
router.get('/newLesson',controller.newLesson);
router.post('/newLesson',controller.postNewLesson);
module.exports = router;
const express = require('express');

const controller = require('../controllers/login.controller');
const middleware = require('../middlewares/user.middleware');
var router = express.Router();
//Login
router.get('/login',controller.login);
router.post('/login',controller.checkLogin);
router.get('/main',controller.main);

//Register
router.get('/register',controller.register);
router.post('/register',controller.postRegister);

module.exports = router;
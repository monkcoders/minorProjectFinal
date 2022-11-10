//js
const express = require('express');

// const {registerStudentView, loginStudentView, registerTeacherView,loginTeacherView } = require('../controllers/loginController');
const {registerGetView,loginGetView, loginPostView, registerPostView}=require('../controllers/loginController');
const {homeView} = require('../controllers/homeController');
const { quizView } = require('../controllers/quizController');
const router = express.Router();

router.get('/',homeView);
router.get('/register', registerGetView);
router.get('/login',loginGetView);
router.get('/quiz',quizView)
// router.get('/submit',submitGetView);

router.post('/login',loginPostView);
router.post('/register',registerPostView);

// router.post('/submit',submitPostView);
// router.get('/registerStudent', registerStudentView);
// router.get('/registerTeacher', registerTeacherView);
// router.get('/loginStudent', loginStudentView);
// router.get('/loginTeacher', loginTeacherView);

module.exports = router;
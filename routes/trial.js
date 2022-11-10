const mysql = require('mysql');
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

const {registerView,loginView}=require('../controllers/loginController');
const {homeView} = require('../controllers/homeController');
const { quizView } = require('../controllers/quizController');
const { submitGetView, submitPostView } = require('../controllers/submitController');
const router = express.Router();

router.get('/',homeView);
router.get('/register', registerView);
router.get('/login',loginView);
router.get('/quiz',quizView)





var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "csmquestionbank"
});




con.connect(function(err) {
  console.log('connected');
  var sql = `select * from questionbank`;
    con.query(sql, function (err, result) {
      if(err) throw err;  
      else console.log(result);
    });
});

module.exports = router;
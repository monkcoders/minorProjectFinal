
//importing dependencies
const express = require("express")
// const app=express();

// var bodyParser=require("body-parser");
const { submitGetView, submitPostView } = require("../controllers/submitController");


//middlewares

// app.use(bodyParser.urlencoded({extended:true}));
const router = express.Router();

router.get('/submit',submitGetView);
router.post('/submit',submitPostView);



module.exports = router;
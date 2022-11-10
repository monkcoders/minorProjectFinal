const express = require("express")
const app=express();

var bodyParser=require("body-parser");


//middlewares
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
const router = express.Router();


app.use(express.static(__dirname + '/public'));

// app.use(function(req,res,next){
//     res.locals.userValue = null;
//     next();
// })

app.use('/',require('./routes/login'));
app.use('/',require('./routes/submit'));
app.use('/',require('./routes/dashboard'))
app.use('/',require('./routes/questionbank'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server don start for port: " + PORT))

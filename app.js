//importing dependencies
const express = require("express")
const app=express();

var bodyParser=require("body-parser");
const { submitPostView, resultView, submitGetView } = require("./controllers/submitController");


//middlewares
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
const router = express.Router();

//rendering form.ejs
router.get("/submit",submitGetView);

// form submission
router.get('/result',resultView);

//creating form
router.post("/submit",submitPostView);
app.use('/',router);
// Starting the server at port 3000
app.listen(3000, function() {
	console.log('Server running on port 3000');
});

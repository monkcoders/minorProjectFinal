const express = require("express")
const app=express();
const con  = require('./config');
// var bodyParser=require("body-parser");


//middlewares
// app.use(bodyParser.urlencoded({extended:true}));



const submitGetView = function(req,res){
	res.render("submitq");
}



const submitPostView= (req,res)=>{
  console.log(req.body);
    
  console.log('hello');
    // console.log(JSON.stringify(req.body));
    var data = req.body;
    console.log(req.body);
    console.log(data.questionText);
    
    con.connect(function(err) {
      console.log('connected');
      var sql = `insert into questionbank(Question,Option1,Option2,Option3,Option4,Answer,Subject) values('${data.questionText}','${data.optionA}','${data.optionB}','${data.optionC}','${data.optionD}', '${data.correctOption}',${data.subject})`;
        con.query(sql, function (err, result) {
          if(err) throw err;  
          else console.log('record inserted');
        });
    });
    res.redirect('/');
};

module.exports={submitGetView,submitPostView};

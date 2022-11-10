const express = require("express")
const app=express();
const con  = require('./config');
// var bodyParser=require("body-parser");


//middlewares
// app.use(bodyParser.urlencoded({extended:true}));



const submitGetView = function(req,res){
  var u_no = req.query.u_no;
    var data;
    con.connect(function(err) {
        var sql = `select first_name,u_no,profession,last_name,email_id,user_id from login_credentials where u_no=${u_no}`;
          con.query(sql, function (err, result,field) {
            if(err) throw err;  
            
            else {
                
                if(result && result.length!=0){
                    data  = result[0]; 
                    console.log(data);
                    res.render("submitq",{page_name:'submit',userData:data});
                }
                else{
                    result.render('/')
                }
            }
          });
        })


}



const submitPostView= (req,res)=>{
  console.log(req.body);
    
  console.log('hello');
    // console.log(JSON.stringify(req.body));
    var data = req.body;
    
    
    con.connect(function(err) {
      console.log('connected');
      var sql = `insert into questionbank(Question,Option1,Option2,Option3,Option4,Answer,Subject,submitted_by) values('${data.questionText}','${data.optionA}','${data.optionB}','${data.optionC}','${data.optionD}', '${data.correctOption}',${data.subject}, '${data.submitted_by}')`;
        con.query(sql, function (err, result) {
          if(err) throw err;  
          else console.log('record inserted');
        });
    });
    res.redirect('/dashboard?u_no='+data.u_no);
};

module.exports={submitGetView,submitPostView};

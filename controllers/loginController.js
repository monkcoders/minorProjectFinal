//js
const express = require("express")
const app=express();
const con  = require('./config');
// const loginjs = require('../public/js/login');

const registerGetView = (req, res) => {
    
    res.render("register",{page_name:'register'});
}

const registerPostView = (req,res)=>{
    console.log("inside register get ");
    var r = req.body;
    console.log(req.body);
    con.connect(function(err) {
      var p = 0;
      var sql = `insert into login_credentials(first_name,last_name,email_id,phone_no,user_id,passwd,profession) values('${r.first_name}','${r.last_name}', '${r.email_id}', ${r.phone_no}, '${r.user_id}','${r.password}',${p});`;
        con.query(sql, function (err, result) {
          if(err) {
            throw err;}

          else console.log('record inserted');
        });

    });



    res.redirect('/login');

}

const loginGetView =(req,res)=>{
    res.render("login",{page_name:'login'});
}
const loginPostView = (req,res)=>{
    console.log("inside login get ");
    console.log(req.body);
    var r = req.body;
    
    con.connect(function(err) {
        var sql = `select first_name,u_no,profession from login_credentials where email_id ='${r.emailId}' and passwd='${r.password}' `;
          con.query(sql, function (err, result,field) {
            if(err) throw err;  
            
            else {
                
                if(result && result.length!=0){

                    console.log(result[0].u_no);
                    const u_no =  "u_no="+result[0].u_no;
                    var nameProfession=result[0];
                    res.redirect('/dashboard?'+u_no);

                // res.redirect('/dashboard',{name:nameProfession.first_name});
                }
                // console.log('record inserted');
                else{

                    res.redirect('/register');

                    }
            }
          });
      });
    
}

module.exports =  {
    registerGetView,
    registerPostView,
    loginGetView,
    loginPostView
};
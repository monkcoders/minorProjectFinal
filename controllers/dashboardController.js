const express = require("express")
const app=express();
const con  = require('./config');

const dashboardView  = (req,res)=>{
    console.log("inside dashboard get ");
    
    var u_no = req.query.u_no;
    var data;
    con.connect(function(err) {
        var sql = `select first_name,u_no,profession,last_name,email_id,user_id from login_credentials where u_no=${u_no}`;
          con.query(sql, function (err, result,field) {
            if(err) throw err;  
            
            else {
                
                if(result && result.length!=0){

                    console.log(result);
                    data  = result[0]; 
                    console.log(data.first_name);
                    res.render('dashboard',{userData:data, page_name:'dashboard'});
                }
                else{
                    result.render('/')
                }
            }
          });
      });
    
    

    
}

module.exports = {dashboardView};
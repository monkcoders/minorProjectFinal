const express = require("express")
const app=express();
const con  = require('./config');

const questionGetView = function(req, res, next) {
    
  var userData= {u_no:req.query.u_no}

  
  var sql=   `select s.s_name, q.Question, q.Option1, q.Option2, q.Option3, q.Option4, q.Answer, q.Q_id from subjects as s, questionbank as q where s.s_id =q.Subject and q.submitted_by=(select user_id from login_credentials as u where u.u_no=${userData.u_no});`;
  con.query(sql, function (err, data, fields) {
  if (err) throw err;
  console.log(data);
  
  res.render('question', { page_name:'submitted', userData:userData, questionData: data});
});
}

const questionbankGetView = function(req, res, next) {
    var p = req.query.p//profession
    var u_no = req.query.u_no;
    console.log(u_no);

    
    var sql='select s.s_name, q.Question, q.Option1, q.Option2, q.Option3, q.Option4, q.Answer, q.Q_id from subjects as s, questionbank as q where s.s_id =q.Subject;';
    con.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    
    res.render('questionbank', {p:p, page_name:'questionbank', userData:{u_no}, questionData: data});
  });
}

const editQuestionGetView = (req,res,next)=>{
  var qid = req.query.qid;
  console.log(qid);
  var sql=`select s.s_name,q.Subject, q.Question, q.Option1, q.Option2, q.Option3, q.Option4, q.Answer, q.Q_id from subjects as s, questionbank as q where s.s_id =q.Subject and q.Q_id=${qid};`;
  con.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    // console.log(data[0].s_name);
    res.render('edit', {page_name:'edit',  data: data[0]});
  });
}

const editQuestionPutView =(req,res,next)=>{
  var uData = req.body;
  
  console.log(uData);
  

    con.connect(function(err) {
      var p = 0;
      var sql = `UPDATE questionbank SET Question='${uData.questionText}', Option1='${uData.optionA}', Option2='${uData.optionB}', Option3='${uData.optionC}', Option4='${uData.optionD}', Answer='${uData.correctOption}', Subject=${uData.subject} where Q_id= ${uData.qid};`
        con.query(sql, function (err, result) {
          if(err) {
            throw err;}  
          else console.log('record updated');
        });
    });
    res.redirect('/');
}


const deleteQuestionGetView = (req,res,next)=>{
  var qid = req.query.qid;
  console.log(qid);
  var sql=`select s.s_name,q.Subject, q.Question, q.Option1, q.Option2, q.Option3, q.Option4, q.Answer, q.Q_id from subjects as s, questionbank as q where s.s_id =q.Subject and q.Q_id=${qid};`;
  con.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    // console.log(data[0].s_name);
    res.render('delete', { page_name:'delete', data: data[0]});
  });
}

const deleteQuestionDeleteView =(req,res,next)=>{
  var qid = req.body.qid;
  
  console.log("deleteing")
  

    con.connect(function(err) {
      var p = 0;
      var sql = `DELETE FROM questionbank where Q_id=${qid};`
        con.query(sql, function (err, result) {
          if(err) {
            throw err;}  
          else console.log('record Deleted');
        });
    });
    res.redirect('/');
}



module.exports= {questionGetView,questionbankGetView,editQuestionGetView,editQuestionPutView,deleteQuestionGetView,deleteQuestionDeleteView};
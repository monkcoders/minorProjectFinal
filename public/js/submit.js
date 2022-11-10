// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "csmquestionbank"
// });



// var form = document.getElementById('form-q');
// form.addEventListener('submit',function(e){
//   e.preventDefault();
//   var question = $('#question-text').value;
//   console.log(question);

// });

// // $('#form-q').submit(function (e) { 
// //   e.preventDefault();

// //   var question = $('#question-text').value;
// //   console.log(question);

  
// // });

// var question = $('#question-text').value;
// var option1 = $('#optionA').value;
// var option2 = $('#optionB').value;
// var option3 = $('#optionC').value;
// var option4 = $('#optionD').value;
// var answer = $('#correctOption').value;
// var subject = $('#subject').value;



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "insert into questionbank(Question,Option1,Option2,Option3,Option4,Answer,Subject) values("+question+","+option1+","+option2+","+option3+","+option4+","+answer+","+subject+")";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
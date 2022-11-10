const quizView  = (req,res)=>{
    const candidate = {candidateName:'Abhishek Sharma', exam : 'TOC', subject:'TOC'};
    var remainingTime = 60;
    const question = {qNo : 2, question:'this is uestion', optionA:'A', optionB:'B', optionC:'C', optionD:'D'}
    res.render('quiz',{candidateName:candidate.candidateName, exam:candidate.exam, subject:candidate.subject, time:remainingTime, qNo :question.qNo, question:question.question, optionA:question.optionA, optionB:question.optionB, optionC:question.optionC, optionD:question.optionD});
}

module.exports = {quizView};
// global variables 

var totalQuestion = 20; //will be taken from the database 
var questionAttempted =  3;//as theuser submits a question an answer it will be stoed in data base and its count will be shown here 
var visitedQuestion = 3
var notVisitedQuestion = totalQuestion-visitedQuestion; //all the questions which are marked as null in the response also taken from the database 
var remainingQuestions = totalQuestion-questionAttempted;

function questionStatus(){
    $('#notVisitedQ').text(notVisitedQuestion);
    $('#remainingQ').text(remainingQuestions);
    $('#attemptedQ').text(questionAttempted);

}
$(document).ready(function(){
	setInterval( questionStatus() ,100);
});

function saveAndContinue(){
    var userResponse = $("input[name='question-option']:checked").val();
    
    console.log(userResponse);
    //code to save this userresponse to the test table
}

function createQuestionButton(){
    for(var i=1; i<=totalQuestion; i++){
        $('#all-question-section').append("<div class='col-2'><button  class='btn btn-secondary status-btn q-number' value='"+i+"'>"+i+"</button></div>")
}
}
createQuestionButton();

function getQuestion(questionNumber){
    var question = "hello this is question"; // question from the question paper data base
    var optionA = "A"; //options from the data base
    var optionB = "B";
    var optionC = "C";
    var optionD = "D";
    $('#question-number').text(questionNumber);
    $('#question-text').text(question);
    $("label[for='op1']").text(optionA);
    $("label[for='op2']").text(optionB);
    $("label[for='op3']").text(optionC);
    $("label[for='op4']").text(optionD);


}

$('.q-number').click(function (e) {
    var questionNumber =this.value;
    getQuestion(questionNumber);
});


function nextQuestion(){
    
    var currentQNumber = Number($('#question-number').text());
    if(currentQNumber===totalQuestion-1){
        $('#next-btn').attr('disabled','disabled');
        
    }
    if($('#prev-btn').attr('disabled')){
            $('#prev-btn').removeAttr('disabled');
    }
    getQuestion(currentQNumber+1);
   
    
}

function clearButton(){
    for (let i = 0; i < 4; i++) {
        $("input[name='question-option']")[i].checked=false;
    }
    //code for removing users choice from the backend 
    
}

function prevQuestion(){
    
    var currentQNumber = Number($('#question-number').text());
    if(currentQNumber<=1){
        $('#prev-btn').attr('disabled','disabled');
       
    }else{
        if($('#next-btn').attr('disabled')){$('#next-btn').removeAttr('disabled');}
        getQuestion(currentQNumber-1)
    }
}
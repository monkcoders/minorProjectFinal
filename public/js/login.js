
// function to switch between Student and Teacher login page 
function changeLoginTo(index){
    console.log('inside login function');
    occupation = ['Student','Teacher'];
    $(document).attr('title', occupation[index]+' login');
    $('.login-image').attr('src', '/images/'+occupation[index]+'.png');
    var i = index==0? i=1:i=0;
    $('#toggle-login-page').text('Login as '+occupation[i]);
    $('#occupation').text(occupation[index]);
}

function toggleStudentTeacherLogin() {
    var occupation = $('#occupation').text();
    console.log(occupation);
    if(occupation==='Student'){
        changeLoginTo(1);
    }
    else {
       changeLoginTo(0);
    }
}

function changeRegisterTo(index){
    occupation = ['Student','Teacher'];
    $(document).attr('title', occupation[index]+' Registeration');
    $('.login-image').attr('src', '/images/'+occupation[index]+'.png');
    var i = index==0? i=1:i=0;
    $('#toggle-register-page').text('Register as '+occupation[i]);
    $('#registration-occupation').text(occupation[index]);
}

// function to switch between Student and Teacher registration page 
function toggleStudentTeacherRegister() {
    var occupation = $('#registration-occupation').text();
    console.log(occupation);
    if(occupation==='Student'){
        changeRegisterTo(1);
    }
    else {
        changeRegisterTo(0);
    }
}

module.exports = {changeLoginTo,changeRegisterTo};

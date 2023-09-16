// VARIABLE-DECLARATION
const form=document.getElementById("loginForm")
var pass=document.getElementById("password");
var user=document.getElementById("username");
var passCheck=document.getElementById("passConfirm");
var userCheck=document.getElementById("userConfirm");

//  ANIMATIONS
window.addEventListener('load',function(e){
    const bg= document.querySelector("#bg");
    const head= document.querySelector("#main-head");
    const contents= document.querySelector(".contents");
    const emp= document.querySelector('#emp')
    const sub= document.querySelector('#sub')

    if(window.innerWidth>768){       
        setTimeout(function(){
            head.style.opacity="1";
            head.style.transform="scale(2)";
        },2000);
        setTimeout(function(){
            head.style.opacity="1";
            head.style="margin:2%";
        },4000);
        setTimeout(function() {
            head.style.opacity="0";
            contents.style.transform = "translateY(-5%)";
            contents.style.opacity = "1";
            // bg.style="filter:blur:8px;";
        },5300);
        
    }else{
        setTimeout(function(){
            head.style.opacity="1";
            head.style.transform="scale(1.7)";
        },1000);
        setTimeout(function(){
            head.style.opacity="1";
            head.style="margin:2%";
        },2000);
        setTimeout(function() {
            head.style.opacity="0";
            head.style ="font-size: 1px";
            head.style.transform = "margin:20%;";
            contents.style.transform = "translateY(-5%)";
            contents.style.opacity = "1";
            // bg.style="filter:blur:8px;";
        },2530);
        
        sub.style="font-size: 35px";
        emp.style="font-size:150px";

    }
});

// VALIDATION FUNCTIONS
function validateUser(){
    if(user.value=="admin"){ 
        user.style.border="";
        userCheck.innerText="";       
        return true;
    }else if(user.value==""){
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="This field cannot be left blank";
    }else{
        user.style.border="2px solid red";
        user.style.borderRadius="4px";
        userCheck.innerText="Invalid Username";
}}
function validatePass(){
if(pass.value=="12345"){
    pass.style.border="";
    passCheck.innerText=""   
    return true;
}else{
    pass.style.border="2px solid red";
    pass.style.borderRadius="4px";
    passCheck.innerText="Wrong Password"
    return false
}}
function resetUser(){
    user.style.border="";
    userCheck.innerText="";
}
function resetPass(){
    pass.style.border="";
    passCheck.innerText="";
}

// VALIDATION
form.addEventListener('submit', function(e){
        var validUser=validateUser();
        var validPass=validatePass(); 
        e.preventDefault();

        if(validUser===true&&validPass===true){
            form.submit();
            window.location.href= './main.html';
        }else if(validUser===false&&validPass===false){
            alert("Invalid credentials");
        }else if(validPass===false){
            alert("Wrong Password");
        }else if(validUser===false){
            alert("Wrong Password");
        }else{
            alert("Login error. Please try again.");
        }
});

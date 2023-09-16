var list = document.getElementById("list");
var tabBody= document.getElementById("table-body");
var logout = document.getElementById("logout");
var box = document.getElementById("box");
var done = 0;

window.onload=function get(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4&&this.status==200){
            var jFile=this.responseText;
            test(jFile);
        }}
    xhttp.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    xhttp.send();
}


function test(data){
    var jList = JSON.parse(data);
    for(var n=0;n<jList.length;n++){
        if(jList[n].completed== true){
            tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" checked="true" disabled = "true"></input></td></tr>`
        }
        else{
            tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" onclick="val(this)" id="box"></input></td></tr>`
        }
    }
}
function val(c){
    if(c.checked){
        done++;
        console.log(done);
        displayMsg();
    }
    else{
        done--;
        console.log(done);
    }
}
function displayMsg(){
    let promiseFn = new Promise(function(resolve,reject){
        if(done==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    })
    promiseFn.then(function(i){
        alert(i);
    })
}

logout.onclick = function(){
    window.location = "./index.html";
}
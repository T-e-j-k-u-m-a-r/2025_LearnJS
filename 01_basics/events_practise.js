// Events in JS

function changeColor(){
    document.body.style.backgroundColor = "dodgerblue";
    document.getElementById("title").style.textAlign = "center";
}

function showDate(){
    document.getElementById("result1").innerHTML = new Date().toLocaleDateString();
}

function showTime(){
    document.getElementById("result2").innerHTML = new Date().toLocaleTimeString();
}

function greet(){
    document.getElementById("result3").innerHTML = "Thank you 👍👍";
}
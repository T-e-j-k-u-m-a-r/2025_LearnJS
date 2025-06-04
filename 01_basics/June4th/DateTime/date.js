// Date and Time - QuiZ

var currentDate = new Date();

function showDate(){

    document.getElementById(`date`).innerHTML = currentDate.toLocaleDateString();

}

function showTime(){

    document.getElementById(`time`).innerHTML = currentDate.toLocaleTimeString();

}

function am_or_pm(){
    
    const am_or_pm = currentDate.toLocaleTimeString().toString().slice(length-2);
    document.getElementById(`am_or_pm`).innerHTML = am_or_pm;
    document.getElementById(`am_or_pm`).style.fontSize = "large";
}


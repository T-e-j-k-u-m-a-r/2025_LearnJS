function showDate(){

    const date = new Date();
    document.getElementById(`result1`).innerHTML = date.toLocaleDateString();

}

function showTime(){
    const date = new Date();
    document.getElementById(`result2`).innerHTML = date.toLocaleTimeString();
}

function changeColor(){
    document.getElementById(`btn3`).style.color = `red`;
    document.getElementById(`btn3`).style.backgroundColor = `yellow`;
    alert(`Button color changed!`);
}
// Closures : The function associated with its lexical scope is called Closures

let greet;

function saveDetails(){

    var guestName = document.getElementById(`user`).value;

    greet = function(){
        alert(`Hello`+guestName+` Welcome...`)
    }
    
    alert(`The details are saved, Please click on greetGuest button`);
    
}

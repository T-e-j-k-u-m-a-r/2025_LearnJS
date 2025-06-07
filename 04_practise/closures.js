let greet;

function saveDetails(){

   const guestName = document.getElementById(`user`).value;

    greet = function sayHello(){
        alert(`Welcome `+guestName);
    }

    alert(`Details are saved, Pleasae click on Greet Guest button`)

}

// Closures are function paried with its lexical environment. 

let greet;

function saveDetails(){

    var customer_name = document.getElementById("user").value;

    greet = function greet(){

        alert(`Welcome `+customer_name+"...😊😊")

    }

    alert(`Details are saved, Now please click on greet button`);
}
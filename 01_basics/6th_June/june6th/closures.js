let greet;

function saveDetails(){

    let guest = document.getElementById(`user`).value;

    greet = function sayHello(){

        alert(`Welcome `+guest);

    }

    alert(`Your details are saved, Please click on greet button`)

}
let greet;//This is where the closure is saved

function saveButton(){

    var guestName = document.getElementById(`name`).value

    greet = function(){
        alert(`Welcome `+guestName)
    }
    
    alert(`Details are saved, Click on Greet button`)

}
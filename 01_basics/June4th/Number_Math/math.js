function generateOTP(){

    let random_value = Math.floor(Math.random()*Math.pow(10,4))
    let length;

    // Length validation 
    if (random_value > 9999) {
        random_value -= 999;        
    } 
    else if(random_value < 1000){
        random_value += 999;
    }

    document.getElementById(`result`).innerHTML = random_value;

    // Print the length of the OTP 
    document.getElementById(`length`).style.color = "green"; 
    document.getElementById(`length`).style.fontSize = "large"; 
    document.getElementById(`length`).innerHTML = `Length of OTP = `+random_value.toString().length;
    
    
}
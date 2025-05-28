function generateOTP(){
    
let num = Math.floor(Math.random() * Math.pow(10,4))
console.log(`num = `+num)
// let num = 1624;

// length check


if (num < 999) {

    num = num + 999;
    
} else if(num > 9999) {
    
    num = num - 999;
}

else if (num.toString().length == 4){


    document.getElementById(`length1`).innerHTML = "The length of OTP is 4 digit, You can proceed..."
    document.getElementById(`length1`).style.color = "green"

}

// Print the 4 digit otp into the UI
document.getElementById(`result1`).innerHTML = num


}
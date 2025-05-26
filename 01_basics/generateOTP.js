function generate4DigitOTP(){

    let otp_generated = Math.floor(Math.random() * Math.pow(10,4)+999);

    if(otp_generated > 10000){
        otp_generated = otp_generated - 999;
    }

    else if(otp_generated < 999){
        otp_generated = otp_generated + 999;
    }

    document.getElementById("otp1").innerHTML = otp_generated;
    document.getElementById("otp1").style.color = "blue";
    document.getElementById("otp1").style.fontSize = "large";

    document.getElementById(`length1`).innerHTML = "Length of 4 digit OTP = "+otp_generated.toString().length;
    
}

function generate6DigitOTP(){

    let otp_generated = Math.floor(Math.random() * Math.pow(10,5)+999);

    if(otp_generated > 100000){
        otp_generated = otp_generated - 9999;
    }

    else if(otp_generated < 9999){
        otp_generated = otp_generated + 9999;
    }

    document.getElementById("otp2").innerHTML = otp_generated;
    document.getElementById("otp2").style.color = "blue";
    document.getElementById("otp2").style.fontSize = "large"; 

    document.getElementById(`length2`).innerHTML = "Length of 6 digit OTP = "+otp_generated.toString().length;

}
// 4 digit pin code generator

function generate4digitOTP(){
      
    let otp_value = Math.floor((Math.random() * Math.pow(10, 4)));

     if (otp_value > 9999) {
        otp_value = otp_value - 999;
    } 
    else if (otp_value < 1000) {
        otp_value = otp_value + 999;
    }
 
    document.getElementById("result1").innerHTML = "Generated OTP = "+otp_value;

    // Length check

   const otp_length = otp_value.toString().length;
   document.getElementById("length1").innerHTML = "Length of the OTP = "+otp_length;

   console.log("Type of = "+typeof(otp_length))

   if(otp_length == 4){
    document.getElementById("warning1").innerHTML = "✔: OTP is EQUAL to 4 digit, Please proceed 😊";
    document.getElementById("warning1").style.color = "blue";
    document.getElementById("warning1").style.fontSize = "x-large";
    document.getElementById("warning1").style.fontFamily = "monospace";

   }

   else if(otp_length > 4){

    document.getElementById("warning1").innerHTML = "🩸 Warning: OTP is MORE than 4 digit";
    document.getElementById("warning1").style.color = "red";
    document.getElementById("warning1").style.fontSize = "x-large";


   }else if(otp_length < 4){

    document.getElementById("warning1").innerHTML = "🩸 Warning: OTP is LESS than 4 digit";
    document.getElementById("warning1").style.color = "red";
    document.getElementById("warning1").style.fontSize = "x-large";

   }
   
   
}

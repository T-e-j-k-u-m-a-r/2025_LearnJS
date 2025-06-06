// Datatypes and Variables 

// let x = "Hello";
// let y = x;
// y = "World";
// console.log(x);



// let x = 10;
// let y = x;
// x = 20;
// console.log(y);
// console.log(x);

// var a = 10;
// var a = 20;

// let b = 1;
// let b;

function studentAdmissionStatus(studentId,studentAdmissionStatus){

    if (studentId === 123 && studentAdmissionStatus === "Admitted") {

        return {
            name:"Alice",
            city:"Newyork"
        }
        
    } else if(studentId === 456 && studentAdmissionStatus === "Status Not Updated") {
        return undefined
        
    }
    else if(studentId === 789 && studentAdmissionStatus === "Student data not in database"){
        return null
    }
}

// Function call
const result1 = studentAdmissionStatus(123,"Admitted");     
const result2 = studentAdmissionStatus(456,"Not admitted");
const result3 = studentAdmissionStatus(789,"Student data not in database");

//console log
console.log(result1);
console.log(result2);
console.log(result3);




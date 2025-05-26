// let name = "Javascript"
// let NAME = "JS"

// console.log(name);
// console.log(NAME);

//-------------------------------------------------------------------//

// Javascript is case-sensitive, Its is discovered by Brendon Eich in 1995
// Variable declartion and assignment

/* Note: You can NOT redelcare a block scoped variable in JAvascript however you can re-iniatize the value to it. 
    Example: let, const 

    Note: However in case of var - Global scropt variable, Both the redeclaration & re-initialization is allowed
*/

// var country = "India";
// var country = "USA"

// console.log(country);


// let city = "Newyork";
// city = "London";

// const pi = 3.14;
// // const pi = 4.14

// console.log(city);
// console.log(pi);

//-------------------------------------------------------------------//

// What is the difference between undefind and null data types in Javascript?

function studentInfo(studentIdNumber, admissionStatus){
    if(studentIdNumber === 123 && admissionStatus === "admmitted"){
        return {
            name : "Alice",
            class : "10th",
        }
    }

    else if(studentIdNumber === 456 && admissionStatus === "Notadmmitted"){
        return undefined; //Student not yet admitted
    }

    else{
        return null;     //Student info not found, Here its explicitly set to null
    }
}

// function call
console.log(studentInfo(123, "admmitted")); // returns student info
console.log(studentInfo(456, "Notadmmitted")); //undefined
console.log(studentInfo(789, "MissingRecords"));  //null


// Note: This basically helps to test the integrity of the test data




// Array Introduction 

/** 
 * Note: 
 * 1. Arrays is a concept of representing one or more type of data and data types using a single variable
 * 2. Datatype of an Array is an object
 * 
 * */ 

// Array Declaration : 
// Type 1 - Number Array (Homogenous Type)

var numbers = [10,20,30,40,50];
console.log(numbers);

// Type 2 - Character Array (Homogenous Type)

var characters = ['a','e','i','o','u'];
console.log(characters);

// Type 3 - String Array (Homogenous Type)
var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore"];
console.log(cities);

// Type 4 - Hetrogenous Array with the combination of all types of datatypes including function and array within itself

function f1(){
    console.log(`This is f1 function`);
    
}

var hetrogenousArray = [null, true, 123, 'c',"JavaScript",f1(),[1,2,3,4]]
console.log(hetrogenousArray);

console.log(hetrogenousArray.flat());








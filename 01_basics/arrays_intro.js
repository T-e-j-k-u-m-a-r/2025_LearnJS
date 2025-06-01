// Arrays: 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log((typeof(fruits)));

// const fruits_string = fruits.toString();

// console.log(fruits_string);
// console.log((typeof(fruits_string)));

// const fruits_array = Array(fruits_string)
// console.log((fruits_array));

// console.log((typeof(fruits_array)));

//--------------------------------------------------------------------//

//Introduction to Array, Type casting to String and then reversing it, Sorting Intro

//

// console.log(Array.isArray(cities));

// console.log(cities.toString());

// console.log(Array.isArray(cities.toString()));

// console.log(typeof(cities.toString()));

// console.log(Array(cities.toString()));

// console.log(typeof(Array(cities.toString())));

// console.log(cities.reverse());

//--------------------------------------------------------------------//

// Array Sorting

//--------------------------------------------------------------------//

//  Array Reversing

//--------------------------------------------------------------------//

// Converting Array to String then back to Array

// Check if given object is an Array of or not? 


//--------------------------------------------------------------------//


//--------------------------------------------------------------------//


//--------------------------------------------------------------------//


//--------------------------------------------------------------------//




let sum = 0;

let numbers = [1,2,3,4,5];
let fruits = ["Banana", "Orange", "Apple", "Mango","Banana", "Orange", "Apple", "Mango","Kiwi","PineApple"];

const characters = ["a","b","c","d","e","c","d","c","d"];
let count = {};

// console.log(typeof(fruits));

characters.forEach(function(ele){

    if(count[ele]){
        count[ele]++;           
    }
    else{
        count[ele] = 1;     
    }

})

console.log(count);


// // forEach() method
// fruits.forEach(function(ele,index,array){

//     // console.log(`The value of element at ${index} = ${ele}`)
//     // console.log(index +` = `+ele);    
	
// })

// numbers.forEach(function(ele,index,array){

//     // sum = sum + ele;
//     sum += ele;

// })

// console.log(`Sum of all elements in the array = `+sum);















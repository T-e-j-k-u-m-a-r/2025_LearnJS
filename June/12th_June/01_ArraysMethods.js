//Array methods: 

//1. forEach

var numbers = [10,20,30,40,50];
// console.log(numbers);

var characters = ['a','e','i','o','u','i','o','u','z','x'];
// console.log(characters);

var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore","Delhi","Kerala","Chennai","Bangalore"];
// console.log(cities);

// cities.forEach(function cb(item,index,arr){
//         console.log(`The element at ${index}th index = ${item}`);
// })

// Print total occurance of an element in an array

var obj1 = {};

cities.forEach(function cb(item,index){
    if (obj1[item]) {
        obj1[item]++;
    } else {
        obj1[item] = 1;
    }
})

console.log(obj1);
console.log(`------------------------------------------`);
var obj2 = {};

characters.forEach(function cb(item,index){
    if (obj2[item]) {
        obj2[item]++;
    } else {
        obj2[item] = 1;
    }
})

console.log(obj2);


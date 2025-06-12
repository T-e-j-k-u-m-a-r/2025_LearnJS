// All other Array methods

var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore"];
var cities_new = ["Jaipur","Agra","Kerala"];

// Using For of Loop
// var count = 0;

// for(ele of cities){
//     console.log(ele);
//     count++;
// }

// console.log(`Total length of the ${cities} array = `+count);

const result1 = cities.some(function cb(item,index,arr){

    return item.startsWith('J');
})

console.log(result1);

const result2 = cities_new.every(function cb(item,index,arr){

    return item.endsWith('a');
})

console.log(result2);


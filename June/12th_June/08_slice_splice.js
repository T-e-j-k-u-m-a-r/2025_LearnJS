var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore"];

var sliced_array = cities.slice(2,5);

console.log(`Original Array::`);
console.log(cities);

console.log(sliced_array);
console.log(cities);

const spliced_array = cities.splice(2,2,"Himachal Pradesh");
console.log(spliced_array);

console.log(`--------------Final original array--------------`);
console.log(cities);







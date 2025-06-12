// Filter method

var numbers = [10,20,30,40,50];
var characters = ['a','e','i','o','u','i','o','u','z','x'];
var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore","Delhi","Kerala","Chennai","Bangalore"];

var result1 = numbers.filter(function cb(ele,index,arr){

    // filter all the values greater than 30
    return ele > 30
})
console.log(result1);
console.log(`-----------------------`);

var result2 = characters.filter(function cb(ele,index,arr){

    // filter all the character which are not vowels
    return !((ele === 'a') || (ele === 'e') || (ele === 'i') || (ele === 'o') || (ele === 'u'))

})
console.log(result2);
console.log(`-----------------------`);

// WAP to print all the distinct values in characters & cities array

const result3 = characters.filter(function cb(item,index,arr){

    return arr.indexOf(item) === index;
    // return arr.indexOf(item) === index; //Enable this to get the duplicate elements in the array

})
console.log(result3);
const result4 = cities.filter(function cb(item,index,arr){
    return arr.indexOf(item) === index;
    // return arr.indexOf(item) !== index; //Enable this to get the duplicate elements in the array
})

console.log(`-----------------------`);
console.log(result4);



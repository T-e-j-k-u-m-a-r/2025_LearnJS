// map method

/**
 * Note: 
 * 1. map method is used to double or multiply the array basically for array transformation
 */

var numbers = [10,20,30,40,50];

var output1 = numbers.map(function double(item,index){
    return item+item;
})

console.log(output1);
console.log(`---------------------------------------`);

var cities = ["Jaipur","Agra","Delhi","Kerala","Chennai","Bangalore","Delhi","Kerala","Chennai","Bangalore"];

var output2 = cities.map(function addStateCode(item,index){

    // return item+`-`+item.charAt(0).toUpperCase()+item.charAt(1).toUpperCase();
    return item.charAt(0).toUpperCase()+item.charAt(1).toUpperCase();

})
console.log(output2);



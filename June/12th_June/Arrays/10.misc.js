var numbers = [10,20,30,40,50,1,2,3,999];
// console.log(numbers);

// Sort in Ascending order
const result1 = numbers.sort(function cb(a,b){

    return a - b;

})

console.log(result1);

//Find 1st Maximum value
console.log((`1st Lowest value = `+result1.at(0)));

//Find 2nd Maximmum value
console.log((`2nd Lowest value = `+result1.at(1)));


// Sort in Desending order
const result2 = numbers.sort(function cb(a,b){

    return b - a;

})

console.log(result2);

//Find 1st Maximum value
console.log((`1st Highest value = `+result2.at(0)));

//Find 2nd Maximmum value
console.log((`2nd Highest value = `+result2.at(1)));


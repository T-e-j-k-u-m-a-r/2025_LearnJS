let numbers = [1,2,3,4,5,6,1,2,3];
let characters = ['a','b','c','d','a','b'];

let obj = {}

// let names = ["Amber","John","Silvia","David","Somerset"];

// Array methods: 

// numbers.forEach(function cb(ele,index,arr){

//     console.log(`Value at index position `+index+` = `+ele)
    
// })

// characters.forEach(function cb(ele,index,arr){
//     if (obj[ele]) {
//         obj[ele]++;
//     } else {
//         obj[ele] = 1;
//     }
// })

// console.log(obj);

let new_character_array = characters.filter(function cb(ele,index,arr){
   
    return arr.indexOf(ele) === index

})

console.log(new_character_array);






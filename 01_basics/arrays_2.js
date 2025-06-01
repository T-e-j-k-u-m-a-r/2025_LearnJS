// let numbers = [1,2,3,4,5,6];

// let city = ["Delhi","Jaipur","Mumbai","Chennai","Bangalore","Mumbai","Chennai","Bangalore"]

// let products = [

//    {
//     itemName:"Laptop",
//     quantity:4,
//     price:10000
//    },
//    {
//     itemName:"Watch",
//     quantity:2,
//     price:5000
//    },
//    {
//     itemName:"Headphones",
//     quantity:2,
//     price:1000
//    }

// ]

// console.log(products);

// console.log(`------------------------------`);

// let obj = {};
// let sum = 0;

// 🎈 forEach 

// 👓 Note: forEach is used to traverse each element in an array

// numbers.forEach(function cb(ele,index,arr){

//     sum = sum + ele;

// })

// console.log(`Sum of all elements in the array = `+sum);

// city.forEach(function cb(ele,index,arr){

//     // Find total occurance of an element in an array
//     if (obj[ele]) {

//         obj[ele]++;
        
//     } else {
//         obj[ele] = 1;
//     }

// })

// console.log(obj);

// ----------------------------------------------------- //

// 🎈 map

// 👓 Note: map is used to transform an existing array

// let new_numbers_array = numbers.map(function sum(item,index,arr){
//     return item * 100;
// })

// console.log(numbers);

// console.log(new_numbers_array);

// let totalProducts = products.map(function cb(item,index,arr){
//     return {
//         productName : item.itemName,
//         totalAmount : item.price * item.quantity
//     }
// })

// console.log(totalProducts);


// ----------------------------------------------------- //

// 🎈filter

// 👓 Note: filter method is used to create a new array from an existing array based on the specified conditions being matched

// let evenArray = numbers.filter(function evenNumbers(item, index,arr){
//     return item % 2 == 0
// })

// let oddArray = numbers.filter(function evenNumbers(item, index,arr){
//     return item % 2 != 0
// })

// console.log(evenArray);

// console.log(oddArray);

// let people = [

//     {
//     name : "John",
//     age : 17,
//     city : "Germany"
//     },
//     {
//     name : "Miller",
//     age : 27,
//     city : "Australia"
//     },
//     {
//     name : "Alice",
//     age : 37,
//     city : "USA"
//     }
// ]

// let adults = people.filter(function cb(item,index,arr){

//         return item.age >=18
// })

// console.log(people);
// console.log("---------------------");
// console.log(adults);

// ----------------------------------------------------- //


// 🎈 reduce

// 👓 Note: reduce is a function/method in JavaScript which is used to get a single value from a given array

// let numerics = [1,2,3];

// let reducedArray = numerics.reduce(function cb(acc,cv,index,arr){

//     // console.log(`acc = `+acc);
    
//     // console.log(`cv = `+cv)

//     return acc+cv;
// },0)

// console.log(`Reduced Array = `+reducedArray);


// ----------------------------------------------------- //
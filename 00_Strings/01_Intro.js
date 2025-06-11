// String methods exploration

// 1. 🥽🥽 Convert all the characters into smaller case except the 1st character

// var course = "JAVASCRIPT";

// console.log(`Original String = ${course}`);

// console.log(`Updated String = `+course.charAt(0)+course.substring(1).toLowerCase());

// ---------------------------------- //

// 2. 🥽🥽 Difference between slice and substring

// const city = "Bangalore";

// console.log(`Original string = ${city}`);
// console.log(`String length = `+city.length);


// var substring_value = city.substring(5);
// var sliced_value = city.slice(-4);

// // Note: Both the methods are used to extract the part of the string from an original string, But slice accepts -ve numbers

// console.log(`substring_value = ${substring_value}`);
// console.log(`sliced_value = ${sliced_value}`);

// ---------------------------------- //

// 3. 🥽🥽 

// var brand = "Lenova";
// console.log(brand.at(0));
// console.log(brand.charAt(0));

// console.log(brand.concat(` - Laptop`));

// const updatedString = brand.concat(` - Laptop`);

// console.log(updatedString.includes(`-`));
// console.log(updatedString.lastIndexOf(`a`));

// console.log(updatedString.endsWith(`top`));
// console.log(`updated length = `+updatedString.length);

// console.log(updatedString.padEnd(`25`,`>`));
// console.log(updatedString.padStart(`25`,`<`));

// console.log(updatedString.repeat(2));

// console.log(updatedString.split(" "));

// ---------------------------------- //

//4. 🥽🥽 replace the phone number 2nd and 3rd group

// var phoneNumber = "123-456-1122";
// var phoneNumber = "(123)-456-1122";
// console.log(phoneNumber);

// // var regex = /(\d{3})-(\d{3})-(\d{4})/g;
// var regex = /[(?](\d{3})[)?]-(\d{3})-(\d{4})/g;

// const output = phoneNumber.replace(regex,function(m1,g1,g2,g3){
//     return `${g1}-XXX-XXXX`;
// })

// console.log(output);

// ---------------------------------- //























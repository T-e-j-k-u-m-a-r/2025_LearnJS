// // Object: Introduction

// // Declaration

// const company = {
//     companyName:"DevOn Software Services",
//     role:"QA",
//     methodology:"Agile",
//     location:"Bangalore"
// }

// // Accessing the object keys
// console.log(company);

// console.log(Object.keys(company));
// console.log(Object.values(company));

// // Loops for objects

// for(key in company){
//     console.log(key);
// }

// // Add additional property

// company.year = 2025;
// company.workMode = "Hybrid";
// company.appliedEarlier = false;

// // console.log(company);

// var metro = {
//     city: "Bangalore-Metro"
// }

// var targerObj = Object.assign({},company,metro);
// // console.log(targerObj);

// // Exploring seal and freeze methods: 

// var configuration = {
//     appUrl : "http://svs-qaops.com",
//     timeout : 10000
// }

// // Exploring freeze - fully immutable

// Object.freeze(configuration);
// configuration.appUrl = "http://svs-preprodqaops.com";
// configuration.timeout = 60000;

// console.log(configuration);

// // Exploring seal - partially immutable

// var userProfile = {
//     userName: "Brendon",
//     role:"standard-user"
// }

// userProfile.userName = "Eich";
// userProfile.role = "account-user";

// console.log(userProfile);

// Object De-Structuring

// var obj = {
//     userName : "Robin",
//     role:"Data-Admin",
//     moreDetails:{
//         city: "Bangalore",
//         cityCode: "KA-BLR"
//     }
// }

// var {userName,role,moreDetails:{city,cityCode}} = obj;

// // var {userName,role,moreDetails:{city,cityCode}} = obj;

// console.log(userName);
// console.log(role);
// console.log(city);
// console.log(cityCode);










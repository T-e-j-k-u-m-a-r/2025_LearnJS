// Strings in JS: 

// let city1 = "Delhi";
// let city2 = new String('Delhi')

// console.log(city1 == city2);    //Type casting is done from string object to promitive string before comparision
// console.log(city1 === city2);   //No Type casting, String object is compared with primitive string


// let a1 = 5;
// let a2 = "5";

// console.log(a1 == a2);  //true      , Here comparision in done only for value
// console.log(a1 === a2); //false    , Here comparision is done for value and typeOf()


// String methods

// let laptopName = "Lenovo Thinkpad L340";

// console.log(laptopName.length); // 20
// console.log(laptopName.toUpperCase()); // LENOVO THINKPAD L340  
// console.log(laptopName.toLowerCase()); // lenovo thinkpad l340
// console.log(laptopName.indexOf("Thinkpad")); // 7
// console.log(laptopName.lastIndexOf("o")); // 5

// console.log(laptopName.slice(0, 6)); // Lenovo

// console.log(laptopName);

// console.log(laptopName.slice(7, 15)); // Thinkpad
// console.log(laptopName.slice(7)); // Thinkpad L340
// console.log(laptopName.slice(-4)); // L340

// console.log(laptopName.replace("Thinkpad", "IdeaPad")); // Lenovo IdeaPad L340
// console.log(laptopName.replace("o", "MMM")); // LenOvO Thinkpad L340

// console.log(laptopName);

// console.log(laptopName.replaceAll("o", "O")); // LenOvO Thinkpad L340/

// console.log(laptopName.charAt(1));
// console.log(laptopName.charCodeAt(1));

// console.log(laptopName.endsWith("L340"));
// console.log(laptopName.startsWith("Lenovo"));
// console.log(laptopName.includes("Thinkpad"));

// console.log(laptopName.split(" "));
 // [ 'Lenovo', 'Thinkpad', 'L340' ]

//  let str1 = "Hello";
//  let str2 = " JavaScript";

//  let output = str1.concat(str2);

//  console.log("output = "+output);
//  console.log("str1 = "+str1);
 


// let city = new String("         Chennai         ");

// console.log(city.trim()); //    "Chennai"
// console.log(city.trimStart()); // "Chennai         "
// console.log(city.trimEnd()); // "          Chennai"

// console.log((typeof(city)));

// console.log((typeof(city.valueOf(city))));














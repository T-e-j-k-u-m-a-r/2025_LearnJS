// function printVowelsAndCountWithRegex(text) {
//     const regex = /[aeiou]/gi; // Regular expression to match vowels (case-insensitive)
//     const matches = text.match(regex); // Find all matches

//     console.log(`Type of matches : `+typeof(matches));
//     console.log(matches);
//     console.log(matches.length);
    
//     if (matches) {
//         const vowelCount = matches.length; // Total count of vowels
//         const vowelsString = matches.join(', '); // Join all vowels into a string
//         console.log(`Vowels in "${text}": ${vowelsString}`);
//         console.log(`Total number of vowels: ${vowelCount}`);
//     } else {
//         console.log(`No vowels found in "${text}"`);
//         console.log(`Total number of vowels: 0`);
//     }
// }

// const text = "JavaScript word";
// printVowelsAndCountWithRegex(text);

// --------------------------------------//

const input = "abc123";

// Regular expression to match letters
const lettersRegex = /[a-zA-Z]+/;
// Regular expression to match digits
const digitsRegex = /\d+/;

// const letters = input.match(lettersRegex) ? input.match(lettersRegex)[0] : '';
// const digits = input.match(digitsRegex) ? input.match(digitsRegex)[0] : '';
// console.log("Letters:", letters); // Output: Letters: abc
// console.log("Digits:", digits);   // Output: Digits: 123

const letters = input.match(lettersRegex) 
const digits = input.match(digitsRegex) 

console.log(letters[0]);
console.log(digits[0]);







// Regex

let names = "Gates,Bill"

console.log(names);

const regex = /(\w+),(\w+)/gm;

const output = names.replace(regex,function(m1,g1,g2){
    return `The output is : ${g2} ${g1}`
})

console.log(output);

var a1 = 10
var a2 = 20;
var a3 = 30;

function first(){
    console.log(`a1 is ${a1}`);
    second();
}

function second(){
    console.log(`a2 is ${a2}`);
    third();
}

function third(){
   console.log(`a3 is ${a3}`);

    // Aync code execution
   setTimeout(function(){
    console.log(`Asynchronous code executed after 3 milliseconds`);
    
   },3000)
}

first();




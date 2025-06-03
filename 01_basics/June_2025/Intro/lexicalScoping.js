// Typical indian family scenario to understand better

function p(){

    // Parents blessings or purpose
    var b = "Parent - All is well";

    // console.log(c);
    // console.log(d);

    function c1(){
        // child 1 purpose
        var c = "Child 1 - Enjoy life with family in India";
        console.log(b);
        
    }

    function c2(){
        // child 2 purpose
        var d = "Child 2 - Move to other country with family";
        console.log(b);
    }

    c1();
    c2();
}

p();

// console.log(b);

// Note: The phenomenon of accessing the variable declared outside the innder function is called "Lexical Environment"

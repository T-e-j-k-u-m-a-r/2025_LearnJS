// Lexical Scope - Phenomenon where the inner function has the scope of using the variable declared outside it and 
// inside the outer function

function p(){
    
    var p_asset = "land & property";

    function c1(){
        var c1_asset = "Car Showroom";
        console.log(`From c1: `+p_asset);
        // console.log(`From c1: `+c2_asset);
        
    }

    function c2(){
        var c2_asset = "Real Estate";
        console.log(`From c2: `+p_asset);
        // console.log(`From c1: `+c1_asset);
    }

    c1();
    c2();

}

// console.log(p_asset);

p();
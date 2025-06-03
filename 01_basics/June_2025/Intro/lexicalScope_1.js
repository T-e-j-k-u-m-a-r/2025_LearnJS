// Lexical Scoping in JavaScript 

function p(){

    var p_asset = "land";

    function c1(){

        var c1_asset = "degree";
        console.log(p_asset +` to c1`);  
        // console.log(c2_asset);

    }

    function c2(){

        var c2_asset = "lottery";
        console.log(p_asset +` to c2`); 
        // console.log(c1_asset);
        

    }

    c1();
    c2();
}

p();



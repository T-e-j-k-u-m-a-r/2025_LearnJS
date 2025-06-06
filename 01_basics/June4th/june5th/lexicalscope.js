function p(){

    var p_asset = "property";

    function c1(){
        console.log(p_asset);
        
    }

    c1();
    // The ability of a inner function to access the variable around its scope is called Lexical Scope
    // Inner function can access the variable defined outside of it which is again inside the outer function

}

p();
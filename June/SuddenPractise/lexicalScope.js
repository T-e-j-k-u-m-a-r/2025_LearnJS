// Lexical Scope - The ability of the a function to access the properties around their scope

function parent(){

    var p_asset = "parent property";

    function child1(){
        var child1_asset = "child property";
        console.log(`Access from child1 Function - `+p_asset);
        
    }

    child1();
}

parent();
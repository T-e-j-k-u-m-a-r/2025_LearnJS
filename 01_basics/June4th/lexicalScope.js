function p(){

    var p_asset = "property"

    function c1(){
        var c1_asset = "c1_secret";
        console.log(p_asset);
        // console.log(c2_asset);
    }

    function c2(){
         var c2_asset = "c2_secret";
         console.log(p_asset);
        //  console.log(c1_asset);
    }

    c1();
    c2();

}

p();
// console.log(c1_asset);
// console.log(c2_asset);
// console.log(p_asset);



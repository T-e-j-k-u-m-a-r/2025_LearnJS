function parent(){

    var p_greet = "parent property"

        function child(){

            var c_asset = "c_asset";
            console.log(p_greet);       
        }

        child();

    }

parent();
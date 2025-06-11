// For In Loop is for Objects

var products = {

    name: "Laptop",
    price: 3000,
    quantity:4

}

for(key in products){
    // console.log(key)
    console.log(`${key} : `+products[key]);
    
}




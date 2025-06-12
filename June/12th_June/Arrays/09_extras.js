// In this example take the example of the product array of objects and explore on array methods

var book_list = [
                    {
                        subject:"Chemistry",
                        author:"Ranga Reddy",
                        edition:2001
                    },
                    {
                        subject:"Mathematics",
                        author:"Dr KSC",
                        edition:1997
                    },
                    {
                        subject:"Physics",
                        author:"Antony Dsouza",
                        edition:2000   
                    },
                    {
                        subject:"Electronics",
                        author:"Edison Thomson",
                        edition:1992
                    },
                    {
                        subject:"OR",
                        author:"Brendon Eich",
                        edition:1995
                    }
                ];

const filtered_book_list = book_list.filter(function cb(item,index,arr){

        // return  item.edition > 1995;
        return ((item.author !== "Dr KSC") && (item.author !== "Edison Thomson") && (item.author !== "Brendon Eich"));
        // return (item.author !== "Dr KSC");
})

console.log(filtered_book_list);


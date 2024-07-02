// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

function make_shirt (Size:string = "Large"  , message: string = '"I love TypeScript!"' ){
    console.log(`\n  ${message} logo printed shirt is available in ${Size} size `);
};

// Calling function with by default value;

make_shirt();

// Calling function with Medium size and default message;
make_shirt("Medium");

// Calling function with different size and different message;
make_shirt("Extra Large" ,"Smile Please!" );
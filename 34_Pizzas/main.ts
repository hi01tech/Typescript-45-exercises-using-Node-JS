// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let  favorite_pizza = ['fajita pizza', 'pepperoni pizza', 'arabic pizza'];


for(let i = 0 ; i <favorite_pizza.length ; ++i){
    console.log(`I like ${favorite_pizza[i]}.`);
    
}

console.log(`"Fajita pizza is my favourite. It is topped with spicy chicken chunks and extra cheese.I  pizza that much that i can eat it everday." `);

// //    2nd method

// for(let onePizza of favorite_pizza){
//     console.log(`i like ${onePizza}`);
    

// }
// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// making array of magicians
let  magician_names = ['Harry', 'Jack', 'John'];

// making function
function  show_magicians(magician_names: string[]){
    magician_names.forEach(magicians =>console.log(magicians));
    
}

// making another function to modify previous

function make_great(magician_names:string[]){
    magician_names.forEach(current => {console.log(`The Great ${current}`)});

}


//printing magicians name by calling functions
make_great(magician_names)




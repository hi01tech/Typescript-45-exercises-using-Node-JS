// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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
console.log("This is orignal array:");
show_magicians(magician_names);


console.log("This is a copy array:");
let copy = magician_names.slice()

make_great(copy);




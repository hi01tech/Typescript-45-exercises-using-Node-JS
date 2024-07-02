// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// creating variable
let pet_animals = ['horse','goat','rabbit'];

// using For-Loop
for(let animal of pet_animals){
    console.log(`A ${animal} would make a great pet. `);
    
}

// Print a message outside of For-loop
console.log(`They are all mammals.Any of these animals would make a great pet!`);

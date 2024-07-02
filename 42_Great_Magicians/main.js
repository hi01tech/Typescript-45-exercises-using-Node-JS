// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// making array of magicians
var magician_names = ['Harry', 'Jack', 'John'];
// making function
function show_magicians(magician_names) {
    magician_names.forEach(function (magicians) { return console.log(magicians); });
}
// making another function to modify previous
function make_great(magician_names) {
    magician_names.forEach(function (current) { console.log("The Great ".concat(current)); });
}
//printing magicians name by calling functions
make_great(magician_names);

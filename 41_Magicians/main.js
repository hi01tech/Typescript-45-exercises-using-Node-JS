// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// making array of magicians
var magician_names = ['Harry', 'Jack', 'John'];
// making function
function show_magicians(magician_names) {
    magician_names.forEach(function (magicians) { return console.log(magicians); });
}
//printing magicians name by calling functions
show_magicians(magician_names);

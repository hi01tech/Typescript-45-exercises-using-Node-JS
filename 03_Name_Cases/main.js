//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personName = "hAneEn iMrAn";
// // Lower Case
console.log("Lower Case: ".concat(personName.toLowerCase()));
// // Upper Case
console.log("Upper Case: ".concat(personName.toUpperCase()));
//Title Case
var step1 = personName.split(' ');
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(" ");
console.log("Title Case: ".concat(step3));

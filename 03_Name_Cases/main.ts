//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let personName = "hAneEn iMrAn";

// // Lower Case
console.log (`Lower Case: ${personName.toLowerCase()}`);

// // Upper Case
console.log (`Upper Case: ${personName.toUpperCase()}`);

//Title Case
let step1 = personName.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() +word.substr(1).toLowerCase());
let step3= step2.join(` `);

console.log (`Title Case: ${step3}`);

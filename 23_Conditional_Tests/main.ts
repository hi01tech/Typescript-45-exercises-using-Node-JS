// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False


let car = 'subaru';

console.log( '\n 5 tests evaluate to True:\n');

//  Test 1 
console.log("Is car == 'subaru'?");
console.log(car == 'subaru');

//  Test 2 
console.log("Is car === 'subaru'?");
console.log(car === 'subaru');

//  Test 3 
console.log("Is car starts with 's'?");
console.log(car !== 'suba');

//  Test 4 
console.log("Is car length is !== 4");
console.log(car.length !== 4);

//  Test 5
console.log("Is car length is >= 4");
console.log(car.length >= 4);

console.log( '\n 5 tests evaluate to False:\n');

//  Test 6 
console.log("Is car == 'corolla'?");
console.log(car == 'corolla');

//  Test 7 
console.log("Is car starts with 'b'?");
console.log(car !== 'subaru');

//  Test 8
console.log("Is car length is == 4");
console.log(car.length == 4);

//  Test 9
console.log("Is car length is <= 4");
console.log(car.length <= 4);


//  Test 10
console.log("Is car ends with 'k' ");
console.log(car.length !== 6);
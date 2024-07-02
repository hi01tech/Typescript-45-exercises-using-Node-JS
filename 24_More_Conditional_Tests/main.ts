// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// •  Tests for equality and inequality with strings:
console.log(`\n Tests for equality and inequality with strings:,\n`);

let mango  = 'mango';

// Tests for equality with strings:
console.log('mango is equal to mango:' );
console.log(mango =='mango',`\n` );

// Tests for inequality with strings:
console.log('mango is not equal to mango:');
console.log(mango !=='mango',`\n` );

// • Tests using the lower case function:
console.log('Tests using the lower case function:,\n');

let fruit ='FRUIT';

console.log('fruit is equal to fruit after converting to Lowercase:');
console.log(fruit.toLowerCase()== 'fruit',`\n`);

console.log('fruit is not equal to fruit after converting to Lowercase:');
console.log(fruit.toLowerCase() !== 'fruit',`\n`);


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log('\nNumerical tests:\n');
let ten :number= 10;
let twenty : number = 20;

// Tests for equality with numbers:
console.log('ten is equal  10:' );
console.log(ten == 10,`\n` );

// Tests for inequality with numbers:
console.log('10 is not equal to 10:' );
console.log(ten !== 10,`\n` );

// Tests for greater than :
console.log('twenty is greater than ten: ' );
console.log(twenty > 10,`\n` );

// Tests for less than :
console.log('twenty is less than ten: ');
console.log(twenty < 10,`\n` );

// Tests for greater than or equal to :
console.log('twenty is greater than or equal to ten: ' );
console.log(twenty >= 10,`\n` );

// Tests for less than or equal to :
console.log('twenty is less than  or equal to ten:' );
console.log(twenty <= 10,`\n` );

// • Tests using "and" and "or" operators:
console.log('Tests using "and" and "or" operators,\n');

// Tests using "and" operator:

console.log('twenty is not equal to ten and twenty is greater than ten :');
console.log((twenty != ten) && (twenty > ten),`\n`);

console.log('twenty is equal to ten and twenty is greater than ten  :');
console.log((twenty == ten) && (twenty > ten),`\n`);

// Tests using "or" operator:

console.log('twenty is equal to ten and twenty is greater than ten :');
console.log((twenty == ten) || (twenty > ten),`\n`);

console.log('twenty is equal to ten and twenty is smaller than ten :');
console.log((twenty == ten) || (twenty < ten),`\n`);

// • Test whether an item is in a array
console.log(`Test whether an item is in a array:\n`);

let items = ['milkshake', 'juice', 'lemonade', 'item'];
console.log( `is juice is in array`);
console.log( items [1]=='juice',`\n`);



// • Test whether an item is not in a array?

console.log(`Test whether an item is not in a array:\n`);

let drink = ['milkshake', 'lassi', 'lemonade', 'item'];
console.log( `is juice is in array`);
console.log( drink [1]=='juice',`\n`);
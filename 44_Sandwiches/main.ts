// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function sandwich_item (...items:string[]){
    items.forEach(item =>  console.log(`${item}`)
      
    );
}

sandwich_item('bread','cheese');
console.log('\n');
sandwich_item( 'egg','letuce');
console.log('\n');
sandwich_item('tomato','olives','slice');


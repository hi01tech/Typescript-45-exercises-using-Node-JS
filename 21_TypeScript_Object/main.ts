interface User  {Name:string , age: number, Profession:string }

let User1: User ={
 Name:'Azam Sheikh',
 age: 40,
 Profession:'Teacher'
}

console.log('\nObject Containig Information About Me: \n');
console.log(`My name is ${User1.Name}.\nI am ${User1.age} years old.\nI am a ${User1.Profession}`);
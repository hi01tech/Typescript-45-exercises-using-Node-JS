// // Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.

// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available

let  current_users = ['Hina', 'Maria', 'Sana', 'Arfa', 'Tuba'];
let new_users = ['HINA', 'Maria', 'Jack', 'Eric','Lisa'];

//  Comparison is Case insensitive.

console.log(`\n//Showing that Comparison is Case insensitive.//\n`);


for(let i = 0 ; i < new_users.length ; ++i){
    if (new_users[i].toLowerCase() === current_users[i].toLowerCase()){
        console.log(`${current_users[i]}, You are needed to enter a new username!`);
        
    }
    else{
        console.log(`This Username is available.`);
        
    }
};





























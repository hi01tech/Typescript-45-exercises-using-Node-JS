/* Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
var names = ["ASMA", "SALMA", "MATEEN", "SUALEHA"];
// for.Each method
names.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ", How are you?")); });

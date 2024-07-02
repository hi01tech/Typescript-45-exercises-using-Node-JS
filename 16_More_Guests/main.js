var guestList = ['Sana', 'Tahir', 'Falak'];
for (var i = 0; i < guestList.length; ++i) {
    console.log("".concat(guestList[i], ", you are invited to dinner at my home."));
}
;
//part a
console.log("Unfortunately ".concat(guestList[1], " can't join us at dinner."));
//part b
guestList.splice(1, 1, "Hina");
console.log(guestList);
//part c
for (var i = 0; i < guestList.length; ++i) {
    console.log("".concat(guestList[i], ", I am honoured you to invite at my dinner party."));
}
;
// Q:16 part a
console.log("\nWE ARE INFORMING YOU THAT WE FOUND A BIGGER DINNER TABLE!");
// Q:16 part b
guestList.unshift("Erum");
console.log(guestList);
//Q:16 part c
guestList.splice(2, 0, "John");
console.log(guestList);
//Q: 16 part d////////////////////////////////append method se krna he dobara se
guestList.push("Kate");
console.log(guestList);
//Q:16 part e
guestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, ",here is a new innvitation of dinner for you!"));
});

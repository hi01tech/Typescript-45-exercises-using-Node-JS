var guestList = ['Sana', 'Tahir', 'Falak'];
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

// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(Size, message) {
    console.log("\n  ".concat(message, " logo printed shirt is available in ").concat(Size, " size "));
}
;
make_shirt("Small", "Wake UP !");

// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city_name, country) {
    return ("\"".concat(city_name, ", ").concat(country, "\""));
}
;
// Calling function  and print the value that’s returned;
console.log(city_country("Dubai", "U.A.E"));
console.log(city_country("Turkey", "Istanbul"));
console.log(city_country("Jaddah", "Saudia Arabia"));

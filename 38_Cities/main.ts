// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


// creating a function:
function describe_city(city_name: string , country: string = "Pakistan"){
    console.log(`${city_name} is in ${country}.`);
    
};

//  Calling function for three different cities
describe_city("Lahore");

describe_city("Multan");

describe_city("Italy");
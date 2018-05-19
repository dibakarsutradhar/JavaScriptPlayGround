let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2018 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));                     // Tastes if a string starts with something
console.log(n.endsWith('mi'));                      // Tastes if a string ends with something
console.log(n.includes(' '));                       // Tastes if a string includes something
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
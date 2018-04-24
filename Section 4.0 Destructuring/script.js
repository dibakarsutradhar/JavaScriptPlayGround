// ES5

var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Doe'
}

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(firstName);
console.log(lastName);



function calcAgeRetirement(year) {
    const age2 = new Date().getFullYear() - year;
    return [age2, 65 - age2];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
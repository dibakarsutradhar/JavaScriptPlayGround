// Section 1.3 - JavaScript Operators
// For JavaScript Operator Precedence - 
// https://developer.mozilla.org/my/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var now = 2018;
var birthYear = now - 21;

var birthYear = now - 21 * 2;
// 21 * 2 = 42
// Total = 1976

console.log(birthYear);

var ageAqeel = 20;
var ageOni = 21;

ageAqeel = ageOni = (4 + 2) * 5 - 15;

ageAqeel++;
ageOni *= 2;

console.log(ageAqeel);
console.log(ageOni);

ageAqeel--;

console.log(ageAqeel);
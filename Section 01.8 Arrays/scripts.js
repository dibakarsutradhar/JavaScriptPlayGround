var names = ['John', 'Mark', 'Hank'];
var years = new Array(1990, 1991, 1992);

console.log(names[2]);
console.log(years[1]);

names[1] = 'Ben';
console.log(names);

var John = ['John', 'Smith', 1992, 'Doctor', false];

John.push('Red');			//	.push - Add element at the end of an Array
John.unshift('Mr.');		// .unshift - Add element at the beginning of an Array
console.log(John); 

John.pop();					// .pop() - Remove element from the end of an Array
John.shift();				// .shift() - Remove element from the beginning of an Array
console.log(John);
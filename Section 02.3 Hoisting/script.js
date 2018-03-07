// Hoisting with FUNCTION

calculateAge(1965);

function calculateAge(year){						// function declairation
	console.log(2018 - year);
}


// retirement(1990) 		- This will not work, because Hosting only works with fucntion declairation, not with function expression.

var retirement= function(year){						// function Expression
	console.log(65 - (2018 - year));
}

retirement(1990);




// Hoisting with VARIABLES


console.log(age); 						// This will result in Undefined, because JS knows there's age variables but not defined yet
var age = 23;							// Global Variable

function foo(){
	console.log(age);
	var age = 65;
	console.log(age);
}

foo();
console.log(age);
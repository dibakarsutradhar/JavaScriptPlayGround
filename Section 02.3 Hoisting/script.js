// Hoisting

calculateAge(1965);

function calculateAge(year){						// function declairation
	console.log(2018 - year);
}


// retirement(1990) 		- This will not work, because Hosting only works with fucntion declairation, not with function expression.

var retirement= function(year){						// function Expression
	console.log(65 - (2018 - year));
}

retirement(1990);
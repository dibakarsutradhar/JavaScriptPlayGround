// Retirement Calculator

function retirement (retirementAge) {									// GLOBAL SCOPE
	var a = ' years left for retirement.';
	return function (yearsOfBirth) {
		var age = 2018 - yearsOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);										// GLOBAL EXECUTION CONTEXT
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// OR

//retirement(66)(1994);




///// HOW CLOSURES WORKS /////

/* An Inner Function Has Always Access to the Variables and Parameters of its Outer Function, Even After the Outer Function has Returend. */
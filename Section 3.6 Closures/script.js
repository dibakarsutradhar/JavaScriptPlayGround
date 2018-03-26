// Retirement Calculator

function retirement (retirementAge) {
	var a = ' years left for retirement.';
	return function (yearsOfBirth) {
		var age = 2018 - yearsOfBirth;
		console.log(retirementAge - age + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1994);
// Age Calculator

function calculateAge(yearOfBirth){
	var age = 2018 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1997);
//console.log(ageJohn);

// Retirement Time Calculator

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log (retirement);
}

yearsUntilRetirement('John', 1990);
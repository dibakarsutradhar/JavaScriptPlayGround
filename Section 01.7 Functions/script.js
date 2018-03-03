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

	if(retirement >= 0){
		console.log (name + ' retires in ' + retirement + ' years');
	} else {
		console.log (name + ' is already retired');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Marry', 1970);
yearsUntilRetirement('Oblak', 1947);
var years = [1998, 1997, 1996, 1995, 1994];
var ages = [];

for (var i = 0; i > years.length; i++) {
	ages[i] = 2016 - years[i];
}

for (i = 0; i < ages.length; i++){
	if (ages[i] >= 18) {
		console.log('Person is ' + ages[i] + ' years old and is of full age.');
	} else {
		console.log('Person is ' + ages[i] + ' years old and is not of full age.');
	}
}
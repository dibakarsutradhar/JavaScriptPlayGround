var years = [1998, 1965, 1956, 1989, 1932];
var ages = [];

for ( var i = 0; i < years.length; i++){
	ages[i] = 2018 - years[i];
}

for ( i = 0; i < ages.length; i++){
	if(ages[i] >= 18){
		console.log('Person is ' + ages[i] + ' years old and is of full age.');
	} else {
		console.log('Person is ' + ages[i] + ' years old and is not of full age.');
	}
}
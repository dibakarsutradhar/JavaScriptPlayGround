
function printFullAge(years){
	var ages = [];
	var fullAges = [];


	for ( var i = 0; i < years.length; i++){
		ages[i] = 2018 - years[i];
	}

	for ( i = 0; i < ages.length; i++){
		if(ages[i] >= 18){
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is of full age.');
			fullAges.push(true);
		} else {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is not of full age.');
			fullAges.push(false);
		}
	}

	return fullAges;
}

var years = [2001, 1965, 1956, 1989, 1932];

var full_1 = printFullAge(years);
var full_2 = printFullAge([2011, 1995, 1987]);
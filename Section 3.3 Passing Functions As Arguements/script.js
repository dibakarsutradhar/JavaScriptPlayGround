var years = [1990, 1995, 1997, 2001, 2005];

function arrayCalc (arr, fn) {												// generic function
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge (el) {												// callback function
	return 2018 - el;
}

function isFullAges (el) {													// callback function
	return el >= 18;
}

function maxHeartRate(el){													// callback function
	if (el >= 18 && el <= 81) {
		return Math.round (206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

var ages = arrayCalc (years, calculateAge);
var fullAges = arrayCalc (ages, isFullAges);
var rates = arrayCalc (ages, maxHeartRate);

console.log (ages);
console.log (fullAges);
console.log (rates);
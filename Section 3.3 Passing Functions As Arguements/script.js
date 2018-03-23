var years = [1990, 1995, 1997, 2001, 2005];

function arrayCalc (arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge (el) {
	return 2018 - el;
}

function isFullAges (el) {
	return el >= 18;
}

var ages = arrayCalc (years, calculateAge);
var fullAges = arrayCalc (ages, isFullAges);

console.log (ages);
console.log (fullAges);
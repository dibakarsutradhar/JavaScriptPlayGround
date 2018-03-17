// Function Constructor

/*
var john = {
	name: 'John',
	yearOfBirth = 1990,
	job = 'Teacher'
};
*/

var Person = function (name, yearOfBirth, job) {									// Function Constructor Name's always will start from Capital Letter
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


var john = new Person ('John', 1980, 'Teacher');
console.log (john);
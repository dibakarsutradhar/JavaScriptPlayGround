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

Person.prototype.calculateAge = function(){											// Inheritance with Method
		console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';												// Inharitance with Properties

var john = new Person ('John', 1980, 'Teacher');
var jane = new Person ('Jane', 1965, 'Doctor');
var rahim = new Person ('Rahim', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
rahim.calculateAge();

console.log(john.lastName);
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Doctor',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(yearOfBirth){
		return 2018 - yearOfBirth;
	}
};

console.log(john);
console.log(john.family);
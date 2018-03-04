var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Doctor',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		return 2018 - this.yearOfBirth;
	}
};

console.log(john);
console.log(john.family);
console.log(john.calculateAge());

var age = john.calculateAge();
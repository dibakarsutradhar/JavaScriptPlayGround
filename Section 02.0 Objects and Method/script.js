
//v1.0

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
john.age = age;

console.log(john);


//v2.0

var mike = {
	name: 'Mike',
	lastName: 'Smith',
	yearOfBirth: 1970,
	job: 'Doctor',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		this.age = 2018 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);
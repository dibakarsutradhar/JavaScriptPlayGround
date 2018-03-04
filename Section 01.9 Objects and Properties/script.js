var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Doctor',
	isMarried: false
};

console.log(john);
console.log(john.yearOfBirth);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

// Data Mutation

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Jorden';
jane['yearOfBirth'] = 1996;
jane['job'] = 'Student';
jane.isMarried = false;

console.log(jane);
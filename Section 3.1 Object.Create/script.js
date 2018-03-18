// Object.Create

var personProto = {
	calculateAge : function(){
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create (personProto);														// One way of creating Object

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create (personProto, {													// Another way of Creating Object
	name: {value: 'Jane'},
	yearOfBirth: {value: 1965},
	job: {value: 'Designer'}
});
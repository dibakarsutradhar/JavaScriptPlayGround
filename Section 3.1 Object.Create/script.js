// Object.Create

var personProto = {
	calculateAge : function(){
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create (personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';
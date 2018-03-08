

calculateAge(1997);

function calculateAge(year){
	console.log(2018 - year);
	console.log(this);
}


// Another Example 


var john = {
	name: 'John',
	yearOfBirth: 1997,
	calculateAge: function(year){
		console.log(this);
		console.log(2018 - this.yearOfBirth);

		function innerFunction(){
			console.log(this);
		}

		innerFunction();
	}
}

john.calculateAge();


var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;				// Borrowing Method
mike.calculateAge();
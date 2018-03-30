// Bind, Call and Apply

var john = {
	name: 'John',
	age: 29,
	job: 'Teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladis and Gentlement! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'casual') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 31,
	job: 'Dancer'
};

john.presentation('casual', 'morning');

john.presentation.call(emily, 'formal', 'afternoon');								// Method Borrowing		-- Call Method
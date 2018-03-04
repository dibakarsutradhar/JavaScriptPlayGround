// FOR loop

for (var i = 0; i < 10; i++){
	console.log(i);
}

var names = ['John', 'Mark', 'Bob', 'Juan', 'Mata'];

for (var i = 0; i < 5; i++){
	console.log(names[i]);
}

// OR

var humanNames = ['John', 'Mark', 'Bob', 'Juan', 'Mata'];

for (var i = 0; i < humanNames.length; i++){
	console.log(humanNames[i]);
}


// OR	- From End to Start

var humanNames2 = ['John', 'Mark', 'Bob', 'Juan', 'Mata'];

for (var i = humanNames2.length - 1; i >= 0; i--){
	console.log(humanNames2[i]);
}
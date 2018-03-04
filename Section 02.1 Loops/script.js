// FOR loop

for (var i = 0; i < 10; i++){
	console.log(i);
}

var names = ['John', 'Mark', 'Bob', 'Juan', 'Mata'];

for (var i = 0; i < 5; i++){
	console.log(names[i]);
}

// OR

var humanNames = ['A', 'B', 'C', 'D', 'E'];

for (var i = 0; i < humanNames.length; i++){
	console.log(humanNames[i]);
}


// OR	- From End to Start

var humanNames2 = ['X', 'Y', 'Z', 'r', 'w'];

for (var i = humanNames2.length - 1; i >= 0; i--){
	console.log(humanNames2[i]);
}

// WHILE Loop

var i = 0;
while(i < humanNames2.length){
	console.log(humanNames2[i]);
	i++;
}

// BREAK Statement for Loop

for(i = 1; i >= 0; i++){
	console.log(i);

	if(i === 3){
		break;
	}
}

// CONTINUE Statement for Loop
/*
for(i = 1; i >= 0; i++){
	if(i === 3){
		continue;
	}
	console.log(i);
}
*/
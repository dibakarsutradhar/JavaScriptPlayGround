var name = 'Afra';
var age = 22;
var isMarried = 'No';

if(isMarried === 'Yes'){									//With String
	console.log(name + ' is Married.');
} else{
	console.log(name + ' will marry soon.');
}

//OR
isMarried = true;

if(isMarried){												//With Boolean
	console.log('YES Married');
} else{
	console.log('NOT Married');
}

//OR
if(isMarried) {												//Else dosen't matter much if the statement is TRUE
	console.log('YES');
}

//Another Comparision Method
if(23 == '23'){												//"=="- Used for Coverting variables,"==="- Used for Compairing
	console.log('Its 23');
}
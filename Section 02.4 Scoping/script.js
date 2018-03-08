
// First Scoping Example

var a = 'Hello';										// GLOBAL Scope - VoGlobal
first();

function first(){										// First() Scope - [Vo1] + [VoGlobal] 
	var b = 'Hi';
	second();

	function second(){									// Second() Scope - [Vo2] + [Vo1] + [VoGlobal]
		var c = 'Hey';
		console.log(a + b + c);
	}
}



// Example to show the difference between executaion stack and scope chain


var a = 'Hello';										// GLOBAL Scope - VoGlobal
first();

function first(){										// First() Scope - [Vo1] + [VoGlobal] 
	var b = 'Hi';
	second();

	function second(){									// Second() Scope - [Vo2] + [Vo1] + [VoGlobal]
		var c = 'Hey';
		third();
	}
}


function third(){
	var d = 'John';
	//console.log(b + c);								// Third() Can't call second or first function because it's not in Scope Chain
	console.log(a + d);									// This code will work because variable a is a global scope.
}
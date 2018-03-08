
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





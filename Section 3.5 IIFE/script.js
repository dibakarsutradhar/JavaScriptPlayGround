// A Simple Math Game - which will display Truth or False

function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();

// Appling IIFE Method

( function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
	}
)();

/* 
If we try to
console.log(score)					- The result will be an Error. Because IIFE creates Data Privacy, so we can't call it from the outside.
*/

( function(dogecoin) {
	var score = Math.random() * 10;
	console.log(score >= 5 - dogecoin);
	}
)(5);
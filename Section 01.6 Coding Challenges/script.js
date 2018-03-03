var name1 = prompt('Enter Player 1 Name: ');
var height1 = prompt('Welcome ' + name1 + ', Enter Your Height in Centemeters: ');
var age1 = prompt('Enter Your Age: ');
var name2 = prompt('Enter Player 2 Name: ');
var height2 = prompt('Welcome ' + name2 + ', Enter Your Height in Centemeters: ');
var age2 = prompt('Enter Your Age: ');
var name3 = prompt('Enter Player 3 Name: ');
var height3 = prompt('Welcome ' + name3 + ', Enter Your Height in Centemeters: ');
var age3 = prompt('Enter Your Age: ');

var score1 = height1 + 5 * age1;
console.log(name1 + 's Score is: ' + score1);

var score2 = height2 + 5 * age2;
console.log(name2 + 's Score is: ' + score2);

var score3 = height3 + 5 * age3;
console.log(name3 + 's Score is: ' + score3);

if(score1 > score2 && score1 > score3){
	console.log(name1 + ' is the Winner');
} else if(score2 > score1 && score2 > score3) {
	console.log(name2 + ' is the Winner');
} else if(score3 > score1 && score3 > score2) {
	console.log(name3 + ' is the Winner');
} else {
	console.log('This game is a Draw');
}
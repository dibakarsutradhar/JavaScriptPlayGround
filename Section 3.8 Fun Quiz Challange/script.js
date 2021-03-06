// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function() {																				// Made all code Private 		--- Task 7
	function Question(question, answers, correct) {											// Function constructor 		--- Task 1
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

	Question.prototype.displayQuestion = function() {										// Displaying Question 			--- Task 4
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++) {										// Possible Answers 			--- Task 4
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans, callback) {								// Validating Answer 			--- Task 6
		var sc;

		if (ans === this.correct){
			console.log('Correct Answer.');
			sc = callback(true);
		} else {
			console.log('Wrong Answer. Try Again.');
			sc = callback(false);
		}

		this.displayScore(sc);
	}

	Question.prototype.displayScore = function(score) {										// Displaying Score 			--- Task 11
		console.log ('Your current score is: ' + score);
		console.log ('------------------------------------------');
	}

	var q1 = new Question('Is JavaSript the coolest programming language in the world?',	// First question 				--- Task 2
		['Yes','No'],
		0);

	var q2 = new Question('What is the capital of Bangladesh?',								// Second question 				--- Task 2
		['Chittagong', 'Comilla', 'Dhaka'],
		2);

	var q3 = new Question('What is the currency name of Bangladesh?',						// Third Question 				--- Task 2
		['USD', 'TAKA', 'BTC', 'BCH', 'BDT'],
		4);

	var questions = [q1, q2, q3];															// Storing questions 			--- Task 3

	function score() {																		// Tracking User Score 			--- Task 10
		var sc = 0;
		return function (correct) {
			if(correct) {
				sc++;
			}
			return sc;
		}
	}

	var keepScore = score();																// Storing the score 			--- Task 10

	function nextQuestion(){																// Next Random Question 		--- Task 8

		var n = Math.floor(Math.random() * questions.length);								// Random Question Genrate 		--- Task 4

		questions[n].displayQuestion();														// Selecting Random question 	--- Task 4

		var answer = prompt('Please select the correct answer. Type exit to quit the game');// Asking for correct ans 		--- Task 5

		if (answer !== 'exit') {															// Exit option to quit game 	--- Task 9
			questions[n].checkAnswer(parseInt(answer), keepScore);							// Checking Answer 				--- Task 6
			nextQuestion();																	// Calling the function again 	--- Task 8
		}	
	}
	nextQuestion();
	
})();



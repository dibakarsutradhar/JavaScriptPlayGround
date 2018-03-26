// Retirement Calculator

function retirement (retirementAge) {									// GLOBAL SCOPE
	var a = ' years left for retirement.';
	return function (yearsOfBirth) {
		var age = 2018 - yearsOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);										// GLOBAL EXECUTION CONTEXT
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// OR

//retirement(66)(1994);




///// HOW CLOSURES WORKS /////

/* An Inner Function Has Always Access to the Variables and Parameters of its Outer Function, Even After the Outer Function has Returend. */



//// CODING CHALLANGES ////

/// WRITE THE SAME FUNCTIONS FROM SECTION 3.4 USING CLOSURES ///

// function for Interview Question

/*function interviewQuestion(job){
	if(job === 'teacher'){
		return function (name) {
			console.log(name + ', Can you please explain what UI Design is?');
		}
	} else if(job === ' designer') {
		return function (name) {
			console.log(name + ', What do you teach?');
		}
	} else {
		return function (name) {
			console.log(name + ', What do you do?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Mark');
designerQuestion('John');

interviewQuestion('teacher')('Anthony');
*/


// Appling CLOUSERS

function interviewQuestion (job){
	return function (name) {
		if (job === 'teacher') {
			console.log(name + ', What do you teach?');
		} else if (job === 'designer') {
			console.log(name + ', Can you please explain what UI Design is?');
		} else {
			console.log(name + ', What do you do?');
		}
	}
}

interviewQuestion('teacher')('John');
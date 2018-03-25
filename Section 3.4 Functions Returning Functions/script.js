// function for Interview Question

function interviewQuestion(job){
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


// function for Interview Question

function interviewQuestion(job) {
	if(job === 'designer'){
		return function(name) {
			console.log(name + ', Can you please explain what UI Design is?');
		} else if(job === 'teacher') {
			return function(name) {
				console.log(name + ', What do you teach?');
			}
		} else {
			return function(name) {
				console.log(name + ', What do you do?');
			}
		}
	}
}



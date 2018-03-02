var age = 20;

if(age <= 19){
	console.log("Teenager");
}else if(age >= 20 && age <= 30){
	console.log("is a Young man");
} else {
	console.log("Man");
}

//Switch Case

var job = prompt('What does John Do? Choose from teacher/ programmer/ driver/ singer.');

switch(job){
	case 'teacher':
		console.log("John is a teacher");
		break;
	case 'programmer':
		console.log("John is a programmer");
		break;
	case 'driver':
		console.log("John is a driver");
		break;
	case 'singer':
		console.log("John is a singer");
		break;
	default:
		console.log("John is an unemloyer");
}
// MAP

const question = new Map();

question.set('question', 'What is the name of latest javaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer!');
question.set(false, 'Wrong Answer, Try Again!');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('Testing Has');
}

// question.clear();

question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for(let [key, value] of question.entries()) {
    console.log(`This is ${key} and it's set to ${value}`);
}
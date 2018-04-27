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
//console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    //console.log('Testing Has');
}

// question.clear();

//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for(let [key, value] of question.entries()) {
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer!'));

console.log(question.get(ans === question.get('correct')));


/*
    WHY MAPS ARE BETTER THEN OBJECTS?

        1. We can use anything as KEY
        2. MAPS are iterable, which make it easy to Loop through them and manipulate data with them.
        3. It's very easy to get the size of MAP using the .size property.
        4. We can easily add and remove data from MAP.
*/
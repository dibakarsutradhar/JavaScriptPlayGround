function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(12, 21, 17, 8);
console.log(sum1);

// ES5
var ages = [18, 21, 13, 17];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);                                      // Spread Operator (...)
console.log(sum3);

const familyMeena = ['Meena', 'Raju', 'Mithu'];
const familyGopal = ['Gopal', 'Montri', 'Moharaj'];
const bigFamily = [...familyMeena, 'Biggani', ...familyGopal];
console.log(bigFamily);
// Let and Const

/*
// ES5
var name5 = 'Jon Doe';
var age5 = 23;
name5 = 'Jon Donald';
console.log(name5);

//ES6
const name6 = 'Jon Doe';            // Constant Variable - Can't Change
let age6 = 23;                      // It can be change
name6 = 'Jon Donald';               // Won't Work - Because, name6 is a const variable
console.log(name6);
*/

// ES5
function drivingLicense5 (passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';                                             // var is a function scop
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car.');     // so it will work   
}

drivingLicense5(true);

// ES6
function drivingLicense6(passedTest) {
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';                                             // let and const are block scop, outside of {} block they will not work
    }
    console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car.');       // so it won't work
}

drivingLicense6(true);
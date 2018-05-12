// Let and Const

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
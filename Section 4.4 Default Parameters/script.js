/// Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var max = new SmithPerson('Max', 1988, 'Hardy', 'Latino');

// ES6
function JokerPerson(firstName, yearOfBirth, lastName = 'Joker', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var batman = new JokerPerson('Batman', 1965);
var superman = new JokerPerson('Super', 1975, 'Man', 'Kryptonian');
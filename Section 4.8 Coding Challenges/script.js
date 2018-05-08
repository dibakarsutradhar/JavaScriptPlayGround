/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;       // Unit = Km2
        this.numTrees = numTrees;
    }

    densityTree() {
        const density = this.numTrees / this.area;

        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 315),
                new Park('National Park', 1984, 2.5, 3517),
                new Park('Linkin Park', 2000, 1.9, 2900)];

const allStreets = [new Street('Gouripur Street', 1984, 1.1, 4),
                new Street('Vulirpar Street', 1994, 0.4, 2),
                new Street('Bazar Street', 1947, 0.9),
                new Street('Pennai Street', 1974, 4.5, 5)];


function reportPark(p) {
    console.log('----- PARKS REPORT -----');
    
    // density

    // average age

    // park name with trees more than 1000
}

function reportStreet(s) {

}

reportPark(allParks);
reportStreet(allStreets);
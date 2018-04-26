// ES5

function isFullAge5() {
    //console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2018 - cur) >= 18);
    })
}

//isFullAge5(1998, 1889, 1997, 2001);

// ES6

function isFullAges6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAges6(1998, 1889, 1997, 2001);
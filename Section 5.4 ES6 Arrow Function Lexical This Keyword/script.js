// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ', and it is ' + self.color + '.';
            alert(str);
        });
    }
}

//box5.clickMe();


// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ', and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box6.clickMe();

/*

                        // This something we don't want to use in our code. It's the same situation as the ES5 one.
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ', and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box66.clickMe();
*/
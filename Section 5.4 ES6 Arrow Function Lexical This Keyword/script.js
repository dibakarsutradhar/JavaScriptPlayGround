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

box5.clickMe();
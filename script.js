
//noooooooooooooooooooooooooooooooooo


var btns = document.querySelectorAll('.btn span');
var operator = ['+', '-', 'x', '÷'];
var decPlace = false;
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if (btnVal == 'C') {
            input.innerHTML = '';
            decPlace = false;
        } else if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                input.innerHTML = eval(equation);

            decPlace = false;
        }
    }
}

var buttons = document.querySelectorAll("span");
var operators = ["+", "-", "x", "÷"];
var decimalPlace = false;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function(e){
    //store screen input to var
    var outputScreen = document.querySelector("#screen");
    var outputValues = outputScreen.innerHTML;
    var btnValues = this.innerHTML;

  }
}

//noooooooooooooooooooooooooooooooooo

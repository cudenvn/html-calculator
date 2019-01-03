// let buttons = document.querySelectorAll('span')
// let operators = ['+', '-', 'x', '÷']
// let decimalPlace = false
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = function(e) {
//     //store screen input to var
//     console.log(buttons[i])
//     var outputScreen = document.querySelector('#screen')
//     var outputValues = outputScreen.innerHTML
//     var btnValues = this.innerHTML
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  console.log('Hello World!')
  let buttons = document.querySelectorAll('span')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
      //store screen input to var
      let outputScreen = document.querySelector('#screen')
      let outputValues = outputScreen.innerHTML
      let btnValue = this.innerHTML
      outputScreen.innerHTML += btnValue
      console.log(btnValue)
    }
  }
})

class Calculator {
  constructor (previousOperandDisplay, currentOperandDisplay) {
    this.previousOperandDisplay = previousOperandDisplay;
    this.currentOperandDisplay = currentOperandDisplay;

    this.appendNumber = function(number) {
      this.currentOperand =  number;
    }

    this.updateDisplay = function() {
      this.currentOperandDisplay.innerText += this.currentOperand;
    }
  }
}
let numberButtons = document.getElementsByClassName('number');
let operationButtons = document.getElementsByClassName('operation');
let allClearButton = document.querySelector('.all-clear');
let equalButton = document.querySelector('.equal');
let previousOperandDisplay = document.querySelector('.upper-display');
let currentOperandDisplay = document.querySelector('.lower-display');

let calculator = new Calculator(previousOperandDisplay, currentOperandDisplay);


for (let i = 0; i < numberButtons.length; i++) {
  let button = numberButtons[i];
  button.addEventListener('click', () => {
    calculator.appendNumber(numberButtons[i].innerText);
    calculator.updateDisplay();
  });
}
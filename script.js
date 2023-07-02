class Calculator {
  constructor (currentOperandDisplay) {
    this.currentOperandDisplay = currentOperandDisplay;

    this.clear = function() {
      this.currentOperandDisplay.innerText = '';
    }

    this.appendNumber = function(number) {
      this.currentOperand =  number;
    }

    this.updateDisplay = function() {
      if (currentOperandDisplay.innerText == "." && currentOperandDisplay.innerText.includes('.')) {
        return;
      }
      this.currentOperandDisplay.innerText += this.currentOperand;
    }

    this.chooseOperation = function(num) {
      this.currentOperand = num;
    }

    this.compute = function() {
      try {
        this.currentOperandDisplay.innerText = eval(currentOperandDisplay.innerText); 
      } catch (error) {
        alert("Invalid operation");
      }
    }

    this.percentage = function() {
      this.currentOperandDisplay.innerText = eval(currentOperandDisplay.innerText/100);
    }

  }
  
}
let numberButtons = document.getElementsByClassName('number');
let operationButtons = document.getElementsByClassName('operation');
let allClearButton = document.querySelector('.all-clear');
let equalButton = document.querySelector('.equal');
let percentageButton = document.querySelector('.percentage');
let currentOperandDisplay = document.querySelector('.display');

let calculator = new Calculator(currentOperandDisplay);


for (let i = 0; i < numberButtons.length; i++) {
  let button = numberButtons[i];
  button.addEventListener('click', () => {
    calculator.appendNumber(numberButtons[i].innerText);
    calculator.updateDisplay();
  });
}

for (let i = 0; i < operationButtons.length; i++) {
  let button = operationButtons[i];
  button.addEventListener('click', () => {
    calculator.chooseOperation(operationButtons[i].innerText);
    calculator.updateDisplay();
  }) 
}

allClearButton.addEventListener('click', () => {
  calculator.clear();
})

equalButton.addEventListener('click', () => {
  calculator.compute();
})

percentageButton.addEventListener('click', () => {
  calculator.percentage();
})
// create a calculator class that will take all inputs and and all calculator functions

// class Calculator {
//   constructor(upperDisplay, lowerDisplay) {
//     this.upperDisplay = upperDisplay
//     this.lowerDisplay = lowerDisplay
//     this.clear()
//   }
// }

//  define the different operation that the calculator will perform

//  clear function
// function clear() {
//   this.currentOperand = ''
//   this.previousOperand = ''
//   this.operation = undefined
// }

// append number function
//  function appendNumber(number) {
//   if (number === "." && this.currentOperand.includes('.')) return
//   this.currentOperand = this.currentOperand.toString() + number.toString()
// }

// choose operation function
function chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
}

// compute operation
function compute() {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case '+':
      computation = prev + current
      break;
    case '-':
      computation = prev - current
    case '*':
        computation = prev * current    
    case '/':
      computation = prev / current
    default:
      return
  }
  this.currentOperand = computation
  this.operation = undefined
  this.previousOperand = ''
}

// update the display
// function updateDisplay() {
//   this.lowerDisplay.innerText = this.getDisplayNumber(this.currentOperand)
//   if (this.operation != null) {
//     this.upperDisplay.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//   }else {
//     this.upperDisplay.innerText = ''
//   }
// }

 function getDisplayNumber(number) {
  const floatNumber = parseFloat(number)
  if (isNaN(floatNumber)) return ''
  return floatNumber.toLocaleString('en')
}

// const calculator = new Calculator(upperDisplay, lowerDisplay);

//set constant variables to collect all buttons in the calculator

// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalButton = document.querySelector("[data-equal]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const upperDisplay = document.querySelector("[data-upper-display]");
// const lowerDisplay = document.querySelector("[data-lower-display]");


// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     // maybe i can use innerHTML in the above line
//     calculator.upperDisplay()
//   })
// })

// operationButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.chooseOperation(button.innerText)
//     // maybei can use innerHTML incase innerText does not work
//     calculator.upperDisplay()
//   })
// })

// equalButton.addEventListener('click', button => {
//   calculator.compute()
//   calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//   calculator.clear()
//   calculator.upperDisplay()
// })

// rewriting the above code in a format that  i understand
// hopefully the login should work.


// create a calculator class that will take all inputs and and all calculator functions



//  define the different operation that the calculator will perform

//  clear function
function clear() {
  this.currentOperand = '';
  this.previousOperand = '';
  this.operation = undefined;
}

// append number function


// update display function


//set constant variables to collect all buttons in the calculator
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

// to hook the values and aking them operate in the calculator object,
// we create a calculator constant and call the class calculator to it, 
// while calling the current and previous operand deisplay as variables.

let operationButtons = document.getElementsByClassName('operation');
let allClearButton = document.getElementsByClassName('all-clear');
let equalButton = document.getElementsByClassName('equal');


// for the append number function to work we need to loop through all the number inputs
// obtained and add an event listener to the buttons. this way we know which number was
// pressed by the user.


// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.upperDisplay()
//   })
// })


// this should not be committed
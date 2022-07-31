const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

//  Calculate first and second values depending upon the operators
const calculate = {
    '/': (firsNumber, secondNumber) => firsNumber/secondNumber,
    '*': (firsNumber, secondNumber) => firsNumber*secondNumber,
    '+': (firsNumber, secondNumber) => firsNumber+secondNumber,
    '-': (firsNumber, secondNumber) => firsNumber-secondNumber,
}; 

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number) {
    // Replace current display value if first value is added
    if(awaitingNextValue){
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    // if operator pressed, don't add decimal
    if (awaitingNextValue) return;
    //  If no deciaml, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}


function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Prevent multiple operator
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    } ;
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        // console.log(firstValue, operatorValue, currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        // console.log('calculation', calculation);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    // ready for the next value store for our operator
    awaitingNextValue = true;
    operatorValue = operator;
    // console.log('firstValue', firstValue);
    // console.log('operatorValue', operator);
}

// Reset display
function resetDisplay() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}


// Add event listners to numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});


// Event Listner 
clearBtn.addEventListener('click', resetDisplay);

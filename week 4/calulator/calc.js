const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

let firstOperand = null;
let secondOperand = null;
let operator = null;
let shouldClearDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isNaN(button.value)) {

            if (shouldClearDisplay) {
                display.value = button.value;
                shouldClearDisplay = false;
            } else {
                display.value += button.value;
            }
        }
        else if (button.id === 'addButton' || button.id === 'subtractButton' || button.id === 'multiplyButton' || button.id === 'divideButton') {
            firstOperand = parseFloat(display.value);
            operator = button.value;
            shouldClearDisplay = true;
        }
        else if (button.id === 'equalsButton') {
            secondOperand = parseFloat(display.value);
            let result;
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
            }
            display.value = result;
            firstOperand = null;
            secondOperand = null;
            operator = null;
            shouldClearDisplay = true;
        }

        else if (button.id === 'clearButton') {
            display.value = '';
            firstOperand = null;
            secondOperand = null;
            operator = null;
            shouldClearDisplay = false;
        }
    });
});

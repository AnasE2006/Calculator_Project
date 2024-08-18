function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        case "%":
            return modulo(num1,num2);
    }
}

let input1 = NaN;
let input2 = NaN;
let operation = NaN;

let digitButtons = document.querySelectorAll(".btn.digit");
let displayScreen = document.getElementById("number-display");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayScreen.innerHTML += button.innerHTML;      
    })
    
});
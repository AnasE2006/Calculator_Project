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

let input1 = "";
let input2 = "";
let operation = "";
let firstNumber = true;

let digitButtons = document.querySelectorAll(".btn.digit");
let operatorButtons = document.querySelectorAll(".btn.operator")
let displayScreen = document.getElementById("number-display");
let equalButton = document.getElementById("equal");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber) {
            displayScreen.innerHTML += button.innerHTML;   
            input1 += button.innerHTML;   
        }
        else {
            displayScreen.innerHTML += button.innerHTML;   
            input2 += button.innerHTML;   
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        displayScreen.innerHTML = "";
        operation = button.innerHTML;
        firstNumber = false;
    })
})

equalButton.addEventListener("click", () => {
    let value = operate(parseFloat(input1),parseFloat(input2),operation);
    displayScreen.innerHTML = value;
    input1 = value;
    input2 = "";
})
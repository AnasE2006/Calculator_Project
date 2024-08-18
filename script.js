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
    if (num2 == 0) {
        return NaN
    }
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
let operatorPressed = false;

let digitButtons = document.querySelectorAll(".btn.digit");
let operatorButtons = document.querySelectorAll(".btn.operator")
let displayScreen = document.getElementById("number-display");
let equalButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber && input1.length < 14) {
            if (displayScreen.innerHTML == "0") {
                displayScreen.innerHTML = button.innerHTML;    
            }
            else {
                displayScreen.innerHTML += button.innerHTML;   
            }
            input1 += button.innerHTML;  
        }
        else {
            if (!firstNumber && input2.length < 14) {
                if (operatorPressed) {
                    displayScreen.innerHTML = "";
                    operatorPressed = false;
                }
                displayScreen.innerHTML += button.innerHTML;   
                input2 += button.innerHTML;   
            }
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (input2 != "") {
            let value = operate(parseFloat(input1),parseFloat(input2),operation);
            if (value.length > 14) {
                value = "NaN"
            }
            displayScreen.innerHTML = value;
            input1 = value;
            input2 = "";   
        }
        operatorPressed = true;
        operation = button.innerHTML;
        firstNumber = false;
    })
})

equalButton.addEventListener("click", () => {
    let value = operate(parseFloat(input1),parseFloat(input2),operation);
    if (value.length > 14) {
        value = "NaN"
    }
    displayScreen.innerHTML = value;
    input1 = value;
    input2 = "";
})

clearButton.addEventListener("click", () => {
    displayScreen.innerHTML = "0";
    input1 = "";
    input2 = "";
    firstNumber = true;
})
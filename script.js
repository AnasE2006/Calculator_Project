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
        return NaN;
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

let calculator = document.getElementById("calc");
let numDisplay = document.getElementById("number-display");
let digitButtons = document.querySelectorAll(".btn.digit");
let operatorButtons = document.querySelectorAll(".btn.operator")
let displayScreen = document.getElementById("number-display");
let equalButton = document.getElementById("equal");
let clearButton = document.getElementById("clear");
let negateButton = document.getElementById("negate");
let calcColorButton = document.getElementById("calcColor");
let outColorButton = document.getElementById("outColor");
let btnColorButton = document.getElementById("btnColor");
let bgrndColorButton = document.getElementById("bgrndColor");
let buttons = document.querySelectorAll(".btn");
let decimalBtn = document.getElementById(".")

decimalBtn.addEventListener("click", () => {
        if (input1 == displayScreen.innerHTML) {
            if (!displayScreen.innerHTML.includes(".")) {
                input1 = input1 + ".";
                displayScreen.innerHTML = input1;
            }
        }
        else {
            if (!displayScreen.innerHTML.includes(".")) {
                input2 = input2 + ".";
                displayScreen.innerHTML = input2;
            }
        }
});

bgrndColorButton.addEventListener("input", () => {
    document.querySelector("body").style.backgroundColor = bgrndColorButton.value;
});

calcColorButton.addEventListener("input", () => {
    calculator.style.backgroundColor = calcColorButton.value;
});

outColorButton.addEventListener("input", () => {
    numDisplay.style.color = outColorButton.value;
});

btnColorButton.addEventListener("input", () => {
    buttons.forEach((btn) => {
        btn.style.backgroundColor = btnColorButton.value; 
    })
});

negateButton.addEventListener("click", () => {
    if (displayScreen.innerHTML != "0") {
        if (input1 == displayScreen.innerHTML) {
            if (displayScreen.innerHTML.charAt(0) == "-") {
                console.log(input1);
                let temp = input1.toString().replace("-","");
                input1 = temp;
                displayScreen.innerHTML = displayScreen.innerHTML.replace("-","");
            }
            else {
                input1 = "-" + input1;
                displayScreen.innerHTML = "-" + displayScreen.innerHTML;
            }
        }
        else {
            if (displayScreen.innerHTML.charAt(0) == "-") {
                input2 = input2.toString().replace("-","");
                displayScreen.innerHTML = displayScreen.innerHTML.replace("-","");
            }
            else {
                input2 = "-" + input2;
                displayScreen.innerHTML = "-" + displayScreen.innerHTML;
            }
        }
    }
});

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber) {
            if (displayScreen.innerHTML == "0") {
                displayScreen.innerHTML = button.innerHTML;    
            }
            else {
                displayScreen.innerHTML += button.innerHTML;   
            } 
            input1 += button.innerHTML; 
        }
        else {
            if (!firstNumber) {
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

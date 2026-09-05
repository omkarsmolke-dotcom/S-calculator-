let expression = document.getElementById("expression");
let result = document.getElementById("result");

let firstNumber = "";
let operator = "";
let secondNumber = "";


// When a number is pressed
function press(number) {

    // If a result was already calculated,
    // start a new calculation
    if (operator === "" && firstNumber !== "") {
        firstNumber = "";
        expression.innerText = "";
        result.innerText = "";
    }

    // Don't allow two decimal points
    if (number === "." && secondNumber.includes(".")) {
        return;
    }

    // Add the number to secondNumber
    secondNumber += number;

    showDisplay();
}


// When +, -, × or ÷ is pressed
function operation(op) {

    // If no number has been entered, do nothing
    if (secondNumber === "") {
        return;
    }

    // Store the first number
    firstNumber = secondNumber;

    // Store the operator
    operator = op;

    // Clear second number for new input
    secondNumber = "";

    showDisplay();
}


// Show expression and preview answer
function showDisplay() {

    if (operator === "") {

        // Only number
        expression.innerText = "";
        result.innerText = secondNumber;

        return;
    }

    // Show expression
    expression.innerText =
        firstNumber + " " + getSymbol(operator) + " " + secondNumber;


    // If second number exists, show preview
    if (secondNumber !== "") {

        let a = Number(firstNumber);
        let b = Number(secondNumber);

        let answer = calculateNumbers(a, b, operator);

        result.innerText = answer;

    } else {

        result.innerText = "";

    }
}


// When = is pressed
function calculate() {

    if (firstNumber === "" ||
        operator === "" ||
        secondNumber === "") {
        return;
    }

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    let answer = calculateNumbers(a, b, operator);

    // After = show ONLY the answer
    expression.innerText = "";
    result.innerText = answer;

    // Save answer for continuing calculation
    firstNumber = answer.toString();
    operator = "";
    secondNumber = "";
}


// Actual calculation
function calculateNumbers(a, b, op) {

    if (op === "+") {
        return a + b;
    }

    if (op === "-") {
        return a - b;
    }

    if (op === "*") {
        return a * b;
    }

    if (op === "/") {

        if (b === 0) {
            return "Error";
        }

        return a / b;
    }
}


// Convert JavaScript operators to calculator symbols
function getSymbol(op) {

    if (op === "*") {
        return "×";
    }

    if (op === "/") {
        return "÷";
    }

    if (op === "-") {
        return "−";
    }

    return "+";
}


// AC button
function clearDisplay() {

    expression.innerText = "";
    result.innerText = "";

    firstNumber = "";
    operator = "";
    secondNumber = "";
}


// Backspace
function backspace() {

    secondNumber =
        secondNumber.slice(0, -1);

    showDisplay();
}


// Percentage
function percentage() {

    if (secondNumber === "") {
        return;
    }

    secondNumber =
        (Number(secondNumber) / 100).toString();

    showDisplay();
}
let firstNum = 66;
let secondNum = 12;
let operation;


function addition(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function subtraction(firstNum, secondNum) {
    console.log(firstNum - secondNum);
}

function multiplication(firstNum, secondNum) {
    console.log(firstNum * secondNum);
}

function division(firstNum, secondNum) {
    console.log(firstNum / secondNum);
}

function operate(firstNum, operation, secondNum) {
    switch(operation) {
        case "addition":
            addition(firstNum, secondNum);
            break;
        case "subtraction":
            subtraction(firstNum, secondNum);
            break;
        case "multiplication":
            multiplication(firstNum, secondNum);
            break;
        case "division":
            division(firstNum, secondNum);
            break;
    }
}
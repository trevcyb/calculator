let firstNum = 0;
let secondNum = 0;
let dispNum = "";
let upperDispNum = "";
let operation = "";
let opsymbol = "";
let answer = 0;
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".ops");
let currentdisp = document.getElementById("current");
let calcsdisp = document.getElementById("calcs");
const equal = document.querySelector("#equal");


function addition(firstNum, secondNum) {
    console.log(6);
    return(firstNum + secondNum);
}

function subtraction(firstNum, secondNum) {
    return(firstNum - secondNum);
}

function multiplication(firstNum, secondNum) {
    return(firstNum * secondNum);
}

function division(firstNum, secondNum) {
    return(firstNum / secondNum);
}

function operate(firstNum, operation, secondNum) {
    switch(operation) {
        case "addition":
            calcsdisp.innerHTML = firstNum + " " + "+" + " " + secondNum + " " + "=";
            answer = addition(firstNum, secondNum)
            currentdisp.innerHTML = answer;
            break;
        case "subtraction":
            calcsdisp.innerHTML = firstNum + " " + "-" + " " + secondNum + " " + "=";
            answer = subtraction(firstNum, secondNum)
            currentdisp.innerHTML = answer;
            break;
        case "multiplication":
            calcsdisp.innerHTML = firstNum + " " + "x" + " " + secondNum + " " + "=";
            answer = multiplication(firstNum, secondNum);
            currentdisp.innerHTML = answer;
            break;
        case "division":
            calcsdisp.innerHTML = firstNum + " " + "/" + " " + secondNum + " " + "=";
            answer = division(firstNum, secondNum);
            currentdisp.innerHTML = answer;
            break;
    }
}

function displayNum() {
    if (dispNum === "") {
        dispNum = this.getAttribute("data-number");
        currentdisp.innerHTML = dispNum;
    } else {
        dispNum += this.getAttribute("data-number");
        currentdisp.innerHTML = dispNum;
    }
}

function setNum () {
    if (upperDispNum === "" && firstNum === 0) {
        console.log(firstNum);
        firstNum = parseInt(dispNum, 10);
    } else {
        secondNum = parseInt(dispNum, 10);
    }
}

function setOp() {
    setNum();
    operation = this.id;
    opsymbol = this.getAttribute("data-sym");
    upperDispNum = dispNum + " " + opsymbol;
    calcsdisp.innerHTML = upperDispNum;
    currentdisp.innerHTML = "";
    dispNum = "";
}


nums.forEach(num => num.addEventListener("click", displayNum));
ops.forEach(op => op.addEventListener("click", setOp));
equal.addEventListener("click", () => {
    setNum();
    operate(firstNum, operation, secondNum);
});
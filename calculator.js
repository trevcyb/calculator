let firstNum = 0;
let secondNum = 0;
let dispNum = "";
let upperDispNum = "";
let operation = "";
let opsymbol = "";
let answer = 0;
let calculated;
const nums = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".ops");
let currentdisp = document.getElementById("current");
let calcsdisp = document.getElementById("calcs");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const allclear = document.querySelector("#allclear");


function addition(firstNum, secondNum) {
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
    calculated = true;
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
    if (calculated === false) {
        if (answer === 0 && upperDispNum === "" && firstNum === 0) {
            firstNum = parseInt(dispNum, 10);
            upperDispNum = dispNum + " " + opsymbol;
        } else if (answer === 0 && upperDispNum != "" && firstNum != 0) {
            secondNum = parseInt(dispNum, 10);
        }
    } else if (calculated === true) {
        if (answer === 0 && upperDispNum != "" && firstNum != 0) {
            upperDispNum = answer + " " + opsymbol;
            secondNum = parseInt(dispNum, 10);
        } else if (answer != 0 && upperDispNum != "" && firstNum != 0) {
            firstNum = answer;
            upperDispNum = answer + " " + opsymbol;
            secondNum = parseInt(dispNum, 10);
        } else if (answer === 0 && upperDispNum != "" && firstNum === 0) {
            upperDispNum = answer + " " + opsymbol;
            secondNum = parseInt(dispNum, 10);
        } else if (answer != 0 && upperDispNum != "" && firstNum === 0) {
            upperDispNum = answer + " " + opsymbol;
            secondNum = parseInt(dispNum, 10);
        }
    }
}

function setOp() {
 
    operation = this.id;
    opsymbol = this.getAttribute("data-sym");
    setNum();
    calcsdisp.innerHTML = upperDispNum;
    currentdisp.innerHTML = "";
    dispNum = "";
}

function clearDiv() {
    if(answer != 0 && upperDispNum != "") {
        clearAll();
    } else {
        dispNum = "";
        currentdisp.innerHTML = dispNum;
    }
}

function clearAll() {
    calculated = false;
    answer = 0;
    firstNum = 0;
    secondNum = 0;
    upperDispNum = "";
    dispNum = "";
    calcsdisp.innerHTML = upperDispNum;
    currentdisp.innerHTML = dispNum;
}

nums.forEach(num => num.addEventListener("click", displayNum));
ops.forEach(op => op.addEventListener("click", setOp));
clear.addEventListener("click", clearDiv);
allclear.addEventListener("click", clearAll);
equal.addEventListener("click", () => {
    setNum();
    operate(firstNum, operation, secondNum);
});
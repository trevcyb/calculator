let firstNum = 0;
let secondNum = 0;
let dispNum = "";
let upperDispNum = "";
let operation = "";
let opsymbol = "";
let answer = 0;
let calculated = false;
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
    if (secondNum != 0) {
        return(firstNum / secondNum);
    } else {
        alert("Nice try funny guy!");
        clearAll();
        return("Cannot divide by 0");
    }
}

function operate(firstNum, operation, secondNum) {
    calculated = true;
    switch(operation) {
        case "addition":
            calcsdisp.innerHTML = firstNum + " " + "+" + " " + secondNum + " " + "=";
            answer = addition(firstNum, secondNum)
            if (answer.toString().length > 21) {
                alert("Answer too long!");
                clearAll();
            } else {
                currentdisp.innerHTML = answer;
            }
            break;
        case "subtraction":
            calcsdisp.innerHTML = firstNum + " " + "-" + " " + secondNum + " " + "=";
            answer = subtraction(firstNum, secondNum)
            if (answer.toString().length > 21) {
                clearAll();
                alert("Answer too long!");
            } else {
                currentdisp.innerHTML = answer;
            }
            break;
        case "multiplication":
            calcsdisp.innerHTML = firstNum + " " + "x" + " " + secondNum + " " + "=";
            answer = multiplication(firstNum, secondNum);
            if (answer.toString().length > 21) {
                clearAll();
            } else {
                currentdisp.innerHTML = answer;
            }
            break;
        case "division":
            calcsdisp.innerHTML = firstNum + " " + "/" + " " + secondNum + " " + "=";
            answer = division(firstNum, secondNum);
            if (answer.toString().length > 21) {
                clearAll();
                alert("Answer too long!");
            } else {
                currentdisp.innerHTML = answer;
            }
            break;
    }
}

function displayNum() {
    if (dispNum === "") {
        dispNum = this.getAttribute("data-number");
        currentdisp.innerHTML = dispNum;
    } else if (dispNum.length < 21) {
        dispNum += this.getAttribute("data-number");
        currentdisp.innerHTML = dispNum;
    } else if (dispNum.length > 21) {
        alert("Current number too long for operation!");
        clearAll();
    }
}

function work() {
    if (upperDispNum === "") {
        firstNum = parseInt(dispNum, 10);
        upperDispNum = firstNum + " " + opsymbol;
    } else if (calculated === true) {
        firstNum = answer;
        upperDispNum = firstNum + " " + opsymbol;
        secondNum = parseInt(dispNum, 10);
    } else if (calculated === false) {
        secondNum = parseInt(dispNum, 10);
    }
}


function setOp() {
    operation = this.id;
    opsymbol = this.getAttribute("data-sym");
    work();
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
    work();
    if (operation != "") {
        operate(firstNum, operation, secondNum);
    } else {
        alert("Don't be that guy!");
        clearAll();
    }

});
"use strict";

const display = document.getElementById('display');
const buttonsNum = Array.from(document.getElementsByClassName('numButton'));
const buttonsOp = Array.from(document.getElementsByClassName('operationButton'));
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
var displayVal = 0;
var num1 = "";
var num2 = "";
var operationSign = "";

function main(){
    display.textContent = displayVal;
    initialize();
}

function initialize(){
    buttonsNum.forEach(function(i){
        i.addEventListener('click', function(e){
        let dataValue = e.target.dataset.value;
        if (displayVal == "0"){
            displayVal = dataValue;
        }
        else if(displayVal.length < 10 || displayVal.includes('.') && displayVal.length < 11)
            displayVal += dataValue;
        
        display.textContent = displayVal;
        })
    })

    decimalButton.addEventListener('click', function(){
        if(displayVal.length < 10 && displayVal.includes('.') == false ? true : false){
            displayVal += '.';
            display.textContent = displayVal;
        }
    })

    buttonsOp.forEach(function(i){
        i.addEventListener('click', function(e){
            operationSign = e.target.dataset.value;
            console.log(operationSign);
            if(num1 === ""){
                num1 = Number(displayVal);
                displayVal = 0;
            }
        })
    })

    clearButton.addEventListener('click', function(){
        displayVal = 0;
        num1 = "";
        num2 = "";
        operationSign = "";
        display.textContent = displayVal;
    })

    deleteButton.addEventListener('click', function(){
        if (displayVal.length > 0){
            displayVal = displayVal.slice(0,-1);
            display.textContent = displayVal;
        }
    })
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x': 
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
    }
}

main();
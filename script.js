"use strict";

const display = document.getElementById('display');
const buttonsNum = Array.from(document.getElementsByClassName('numButton'));
const buttonsOp = Array.from(document.getElementsByClassName('operationButton'));
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
var displayVal = 0;
var num1 = "";
var num2 = "";

function main(){
    display.textContent = displayVal;
    initialize();
}

function initialize(){
    buttonsNum.forEach(function(i){
        i.addEventListener('click', function(e){
        let dataValue = e.target.dataset.value;
        console.log(dataValue);
        if (displayVal == "0"){
            displayVal = dataValue;
        }
        else if(displayVal.length < 10)
            displayVal += dataValue;
        else 
            displayVal = 0;
        
        display.textContent = displayVal;
        })
    })

    buttonsOp.forEach(function(i){

    })

    clearButton.addEventListener("click", function(){
        displayVal = "0";
        num1 = "0";
        num2 = "0";
        display.textContent = displayVal;
    })

    deleteButton.addEventListener("click", function(){
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
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*': 
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

main();
"use strict";

const display = document.getElementById('display');
const buttonsNum = Array.from(document.getElementsByClassName('numButton'));
const buttonsOp = Array.from(document.getElementsByClassName('operationButton'));
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
display.textContent = 0;
var firstOperand= "";
var secondOperand= "";
var operationSign = null;
var reset = false;

function initialize(){

    equalButton.addEventListener('click', compute);
    clearButton.addEventListener('click', clear);
    deleteButton.addEventListener('click', del);

    buttonsNum.forEach((button) =>
        button.addEventListener('click', () => append(button.dataset.value))
    )

    buttonsOp.forEach((button) => 
        button.addEventListener('click', () => operation(button.dataset.value))
    )

}

function clear(){
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operationSign = null;
}

function del(){
    display.textContent = display.textContent.slice(0, -1);
}

function resetScreen(){
    display.textContent = '';
    reset = false;
}

function append(input){
    if (reset) resetScreen();
    if (display.textContent.length < 10 || display.textContent.includes('.') && display.textContent.length < 11){
        if(input === '.'){
            if(display.textContent === ''){
                display.textContent = '0';
            }
            if(display.textContent.includes('.')) return
            display.textContent += '.'
        }else{
            if(display.textContent === '0'){
                display.textContent = input;
            }else
            display.textContent+= input;
        }
    } 
}

function operation(operator){
    if(operationSign !== null) compute();
    firstOperand = display.textContent;
    operationSign = operator;
    reset = true;
}

function compute(){
    if(operationSign === null || reset === true) return
    if(operationSign === '÷' && display.textContent === '0'){
        alert("Cannot divide by 0");
        return;
    }
    secondOperand = display.textContent;
    display.textContent = calculate();
    operationSign = null;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function calculate(){
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    if(operationSign === '+'){
        return add (firstOperand, secondOperand);
    }
    else if(operationSign === '-'){
        return subtract (firstOperand, secondOperand);
    }
    else if(operationSign === 'x'){
        return multiply (firstOperand, secondOperand);
    }
    else if(operationSign === '÷'){
        return divide (firstOperand, secondOperand);
    }
    else return null;
}

initialize();
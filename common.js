const operation = getOperation();
const listOfOperands = getOperand('Enter your numbers via space');
const  operandsArray = goOverListOfOperands (listOfOperands);


calculate(operation,operandsArray);


function getOperation() {
    let operationInput = '';

    do {
        operationInput = prompt('What do you want to do? + - * /');
    } while (isOperationInvalid(operationInput));

    return operationInput;
}

function isOperationInvalid(operationInput) {
    return (
        operationInput !== '+' &&
        operationInput !== '-' &&
        operationInput !== '*' &&
        operationInput !== '/'
    );
}

function getOperand(operandInput) {
    let operands = prompt(operandInput);
    return operands;
}

function goOverListOfOperands (listOfOperands) {


    let arrayFill = listOfOperands.split(' ');
    let arrayRefill = [];

    for (let i = 0; i < arrayFill.length; i++) {
        if (!isNaN(arrayFill[i])) {
            arrayRefill.push(Number(arrayFill[i]));
        }

    }
    return arrayRefill;

}

function calculate(operation, operandsArray) {
    let result;

    switch (operation) {
        case '+':
            result= sum(operandsArray);
            console.log(`${operandsArray.join('+')}=${result}`);
            break;
        case '-':
            result= sub(operandsArray);
            console.log(`${operandsArray.join('-')}=${result}`);
            break;
        case '*':
            result= mult(operandsArray);
            console.log(`${operandsArray.join('*')}=${result}`);
            break;
        case '/':
            result= div(operandsArray);
            console.log(`${operandsArray.join('/')}=${result}`);
            break;
    }

}

function sum(operandsArray) {

    let result = 0;

    for(let i = 0; i < operandsArray.length ; i++){
        result = result + operandsArray[i];
    }
    return result;

}

function sub(operandsArray) {

    let result = operandsArray[0];

    for(let i = 1; i < operandsArray.length ; i++){
        result= result - operandsArray[i];

    }
    return result;

}

function mult(operandsArray) {

    let result = operandsArray[0];

    for(let i = 1; i < operandsArray.length ; i++){
        result= result * operandsArray[i];

    }
    return result;

}

function div(numbers) {
    let result = operandsArray[0];

    for(let i = 1; i < operandsArray.length ; i++){
        result= result / operandsArray[i];

    }
    return result;

}






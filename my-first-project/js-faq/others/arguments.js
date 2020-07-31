function addNumber(firstNumber, secondNumber){
    console.log(arguments);
    return firstNumber + secondNumber;
}

addNumber(2,4,5,6,7);
var result = addNumber(2,4);
console.log(result);

var my_array = [1,2,3,4,5];

function isOdd(element){
    return element % 2 == 0;
}
console.log(my_array.find(isOdd));

// find method find the element who match the condition
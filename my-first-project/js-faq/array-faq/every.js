function isEven(element){
    return element % 2 == 0;
}

function isPositive(element){
    return element > 0;
}

function isOdd(element, index, array) { 
    return element % 2 == 1; 
} 

function func(){
    var items = [10,22,44,66,88];

    console.log(items.every(isEven));
    console.log(items.every(isPositive));
    console.log(items.every(isOdd));
}

func();
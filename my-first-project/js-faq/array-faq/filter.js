function isGreaterThan18(element){
    return element > 18;
}

var my_array = [12, 18, 20, 23, 45,15];

console.log(my_array.filter(isGreaterThan18));

// result 
// [ 20, 23, 45 ]
function isOdd(element, index, array) {
    return (element % 2 == 1);
}

console.log([4, 6, 8, 12].findIndex(isOdd)); 
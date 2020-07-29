var A = ['HTML', 'CSS', 'HTML', 'React'];

// Here array.values() function is called. 
var iterator = A.values();


// console.log(iterator.next().value); 
// console.log(iterator.next().value); 
// console.log(iterator.next().value); 
// console.log(iterator.next().value); 

for (var item of iterator) {
    console.log(item);
} 
const my_array = [2,3,4,5];
var published_array = [];

my_array.forEach(function(item){
    published_array.push(item+2);
});

console.log(my_array);
console.log(published_array);

// Result
// [ 2, 3, 4, 5 ]
// [ 4, 5, 6, 7 ]
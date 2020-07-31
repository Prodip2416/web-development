var array = [ 'geeks', '4', 'geeks' ]; 
  
// Accessing array elements one by one 
console.log(array[0]); 
console.log(array[1]); 
console.log(array[2]); 

var array_new = [1,2,3,4,5];

// for(var index = 0; index < array_new.length; index++){
//     console.log(array_new[index]);
// }

array_new.forEach(function(item){
    console.log(item);
});

// Result
// geeks
// 4
// geeks
// 1
// 2
// 3
// 4
// 5
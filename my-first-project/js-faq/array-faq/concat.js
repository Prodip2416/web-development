function func() { 
    var num1 = [11, 12, 13], 
        num2 = [14, 15, 16], 
        num3 = [17, 18, 19]; 
    console.log(num1.concat(num2, num3, [1,2,3,4,5])); 
} 

func();

// result
// [
//     11, 12, 13, 14, 15, 16,
//     17, 18, 19,  1,  2,  3,
//      4,  5
//   ]
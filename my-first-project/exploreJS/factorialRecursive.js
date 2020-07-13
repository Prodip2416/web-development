
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4 
// 5! = 4! * 5
// 6! = (6-1)!* 6
// n! = (n-1)! * n


function factorial(n){
    if(n == 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
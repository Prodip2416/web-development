// var fibo = [0,1];

// for(var i = 2;i <= 10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

// function fibo(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fibo(n - 1) + fibo(n - 2)
// }

// console.log(fibo(10));


function fibonacchi(n) 
{
    if (n == 0) return [0]
    if (n == 1) return [0,1]
    else{
        var fibo = fibonacchi(n - 1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibonacchi(1));
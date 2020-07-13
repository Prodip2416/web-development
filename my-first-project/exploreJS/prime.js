function IsPrime(n){
    for(var i = 2;i<n;i++){
        if(n%i==0)
        {
            return n + ', Not a Prime Number!';
        }
    }
    return 'This is a Prime Number : '+ n;
}

console.log(IsPrime(3));
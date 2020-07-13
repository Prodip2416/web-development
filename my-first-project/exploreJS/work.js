function diceNum(){
    var gameOut="Try again";
    var dice=6;
    var result= Math.floor(Math.random()*dice);
    if(result==0) return gameOut;
    else return result;
}
console.log(diceNum());

console.log(01744610);
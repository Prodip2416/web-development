function reverseString(str){
    var reverseString = "";
    for(var i = 0; i<str.length;i++){
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}


var result = reverseString("I'm a good person.i live in Dhaka Bangladesh.");
console.log(result);
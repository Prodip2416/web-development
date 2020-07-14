var ary = [1,2,3,4,2,1,3,5,7,8,9,7,9,1,9,6,8,7];
var result = [];
for(var i = 0;i<ary.length ;i++){
    if(result.indexOf(ary[i]) === -1)
    {
        result.push(ary[i]);
    }
}

console.log(result);
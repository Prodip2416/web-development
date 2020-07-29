var a = 'hi';

function scopeFunc(){
    console.log(a);
      a = 'hello';
   // console.log(a);
}
//console.log(a);
scopeFunc();
console.log(a);
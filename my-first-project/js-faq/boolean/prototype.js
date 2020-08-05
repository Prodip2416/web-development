Boolean.prototype.color = function (pro) {
    if (pro == true) {
        return "Green";
    } else {
        return "Orange";
    }
};

// Creating a new boolean object 
var Obj = new Boolean(true);

console.log("Color of Gfg = " + Obj.color(true)); 

// REsult
// Color of Gfg = Green
var dateObj = new Date();
var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
};
console.log(dateObj.toLocaleDateString("en-US"));
console.log(dateObj.toLocaleDateString("en-US", options)); 

// Result
// 8/5/2020
// Wednesday, Aug 5, 2020
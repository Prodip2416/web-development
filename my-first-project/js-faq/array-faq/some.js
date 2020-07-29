function checkAvailability(arr, val) { 
    return arr.some(function (arrVal) { 
        return val === arrVal; 
    }); 
} 

function isEven(element){
    return element % 2 == 0;
}
function func() { 
    // Original function 
    var arr = [1, 5, 9, 1, 15]; 

    // Checking for condition 
    console.log(checkAvailability(arr, 1)); 
    console.log(arr.some(isEven)); 
} 
func(); 
function func(){
    var arr = [10,20,30,40,50];

    var new_arr = arr.map(function(element, index, arr){
        return arr;
    });

    console.log(new_arr);
}


func();
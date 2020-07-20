function scrollFacebook(){
    console.log("Scroll Facebook.");
}
function putYourComment(){
    console.log("Put your comment in Facebook.");
}
function likeButtonPress(){
    console.log("Like Button Press");
}

function getInfo(name, task){
    console.log(name," is working on this.");
    task();
}

getInfo('Tuhin', scrollFacebook);
getInfo('Tamjid', putYourComment);
getInfo('Joy', likeButtonPress);


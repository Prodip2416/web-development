
var articles = document.getElementsByClassName('article');
console.log(articles);

for(var i =0; i<articles.length;i++){
    console.log(articles[i].innerText);
    articles[i].style.backgroundColor='red';
}

document.getElementById('heading').style.color='white';

document.getElementById('heading').style.fontSize='50px';
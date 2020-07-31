var webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];
console.log(webDvlop );

var removed = webDvlop.splice(2, 1, 'PHP', 'React_Native')
console.log(webDvlop);
console.log(removed);

webDvlop.splice(-2, 0, 'React')
console.log(webDvlop) 
function clickHandler() {
    console.log('Someone Click Me.');
}

function doubleClickHandler() {
    console.log('Someone Double Click Me.');
}

function onMouseMoveHandler() {
    console.log('Someone on Mouse Move.');
    document.body.style.backgroundColor = 'gray'
}

function onMouseOutHandler() {
    console.log('Someone on Mouse Uut.');
}

const thirdButton = document.getElementById('btn-third');
thirdButton.onmousemove = onMouseMoveHandler;

// Add Event Listener Example
document.getElementById('btnListener').addEventListener('click', clickHandler);
document.getElementById('btnListener').addEventListener('click', function(){
    document.body.style.color='tomato';
});
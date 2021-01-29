document.addEventListener("DOMContentLoaded", function () {

let container = document.createElement('div');
let button = document.createElement('button')
let btnText = document.createTextNode('add square');

container.appendChild(button);
button.appendChild(btnText);
document.body.appendChild(button);
button.addEventListener('click', function(){
    let square = document.createElement('div');
    document.body.appendChild(square);
    square.className = 'addSquare';

});

});
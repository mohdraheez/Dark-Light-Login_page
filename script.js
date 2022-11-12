var switcher = document.querySelector('.switcher');
var logindiv = document.querySelector('.logindiv');
var input = document.querySelectorAll('.textinput');

input[0].classList.add('textinput');
input[1].classList.add('textinput');

logindiv.classList.add('black_text');

switcher.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('black');
    logindiv.classList.toggle('dark');
    input[0].classList.toggle('inputLight');
    input[1].classList.toggle('inputLight');
});


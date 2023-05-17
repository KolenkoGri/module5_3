'use strict';

const ul = document.createElement('ul');

const body = document.querySelector('body');

body.append(ul);

const infin = () => {
    const string = prompt('Введите любую строку');
    if (string === 'del') {
        ul.removeChild(ul.lastChild);
    } else if (string === 'clear') {
        ul.replaceChildren();
    } else if (string === null || string === 'exit'){
        clearInterval(timerId);
    } else if (string && string.trim() === '') {
        alert('Вы ввели пустое содержимое');
    }
    else {
        ul.insertAdjacentHTML('beforeend', `<li>${string}</li>`);
    }
}

const timerId = setInterval(() => {
    infin();
},0); 

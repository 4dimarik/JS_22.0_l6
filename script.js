'use strict';
// Загадывание случайного числа от 1 до 100

const isNumber = num => !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ');
function guessTheNumber(number, question) {
    let answer = prompt(question ? question : 'Угадай число от 1 до 100');

    if (answer === null) {
        alert('Игра окончена!');
        return;
    } else if (isNumber(answer) && +answer > number) {
        alert('Загаданное число меньше');
        guessTheNumber(number);

    } else if (isNumber(answer) && +answer < number) {
        alert('Загаданное число больше');
        guessTheNumber(number);

    } else if (isNumber(answer) && +answer === number) {
        alert('Поздравляю, Вы угадали!!!');
        return;

    } else {
        alert('Введи число!');
        guessTheNumber(number);
    }

}

guessTheNumber(33);
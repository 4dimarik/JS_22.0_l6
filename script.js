'use strict';
// Загадывание случайного числа от 1 до 100

const isNumber = num => !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(' ');
function guessTheNumber(number, attemptCount = 3) {
    let answer = prompt('Угадай число от 1 до 100');
    attemptCount--;
    console.log(attemptCount);
    if (attemptCount === 0) {
        if (confirm('Попытки закончились, хотите сыграть еще?')) {
            guessTheNumber(number, 10);
        } else return;
    }
    if (answer === null) {
        alert('Игра окончена!');
        return;
    } else if (isNumber(answer) && +answer > number) {
        alert('Загаданное число меньше');
        guessTheNumber(number, attemptCount);

    } else if (isNumber(answer) && +answer < number) {
        alert('Загаданное число больше');
        guessTheNumber(number, attemptCount);

    } else if (isNumber(answer) && +answer === number) {
        alert('Поздравляю, Вы угадали!!!');
        return;

    } else {
        alert('Введи число!');
        guessTheNumber(number);
    }

}

guessTheNumber(33);
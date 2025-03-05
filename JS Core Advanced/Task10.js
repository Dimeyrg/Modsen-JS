"use strict";

// Функция для генерации случайного числа с задержкой
function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        // Генерируем случайное число от 1 до 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        // Задержка в секундах
        const delay = randomNumber;

        // Используем setTimeout для задержки
        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Сгенерировано число: ${randomNumber}. Успех!`);
            } else {
                reject(`Сгенерировано число: ${randomNumber}. Ошибка!`);
            }
        }, delay * 1000); // Умножаем на 1000 для перевода в миллисекунды
    });
}

// Пример использования функции
generateRandomNumber()
    .then(result => {
        console.log(result); // Успешный результат
    })
    .catch(error => {
        console.error(error); // Ошибка
    });
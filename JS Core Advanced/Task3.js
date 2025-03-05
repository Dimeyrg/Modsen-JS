"use strict";

function sumFirstAndLastDigit(num) {
    // Преобразуем число в строку для работы с цифрами
    const numStr = num.toString();

    // Берем первую и последнюю цифры
    const firstDigit = parseInt(numStr[0]);
    const lastDigit = parseInt(numStr[numStr.length - 1]);

    // Считаем сумму
    const sum = firstDigit + lastDigit;

    console.log(`Сумма первой и последней цифры: ${sum}`);
}

// Пример использования
sumFirstAndLastDigit(12345); // Вывод: 6
sumFirstAndLastDigit(98765); // Вывод: 14
sumFirstAndLastDigit(5);      // Вывод: 10 (5 + 5)
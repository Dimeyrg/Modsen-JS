"use strict";

function divideNumbers(a, b) {
    // Проверка на ноль
    if (b === 0) {
        throw new Error("Ошибка: Деление на ноль недопустимо.");
    }

    return a / b; // Выполнение деления
}

// Пример использования
try {
    const result = divideNumbers(10, 0);
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(error.message); // Вывод: Ошибка: Деление на ноль недопустимо.
}

try {
    const result = divideNumbers(10, 2);
    console.log(`Результат: ${result}`); // Вывод: Результат: 5
} catch (error) {
    console.error(error.message);
}
"use strict";

function sumOfSquares(arr) {
    // Проверяем, является ли входной аргумент массивом
    if (!Array.isArray(arr)) {
        throw new Error("Входной аргумент должен быть массивом.");
    }

    // Используем метод reduce для вычисления суммы квадратов
    const sum = arr.reduce((acc, num) => {
        return acc + num * num; // Квадрат каждого элемента
    }, 0);

    return sum;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5,];
const result = sumOfSquares(numbers);
console.log(`Сумма квадратов элементов массива: ${result}`); // Вывод: 55
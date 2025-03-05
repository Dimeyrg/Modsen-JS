"use strict";

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    // Подсчитываем количество вхождений каждого символа
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Находим первый неповторяющийся символ
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Возвращаем первый неповторяющийся символ
        }
    }

    return null; // Если все символы повторяются
}

// Пример использования
const inputString = "мамонт";
const result = firstNonRepeatingCharacter(inputString);
console.log(`Первый неповторяющийся символ: ${result}`); // Вывод: "w"
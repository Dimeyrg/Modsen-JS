"use strict";

function countVowels(str) {
    // Определяем гласные буквы
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Проходим по каждому символу строки
    for (let char of str) {
        // Проверяем является ли символ гласной
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Пример использования
const inputString = "Hello world!";
const vowelCount = countVowels(inputString);
console.log(`Количество гласных: ${vowelCount}`);
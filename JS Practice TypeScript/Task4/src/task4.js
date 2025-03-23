"use strict";
// Реализация функции
function processData(input) {
    if (Array.isArray(input)) {
        return input.length; // Возвращаем длину массива
    }
    else {
        // Возвращаем строку с информацией о Person
        return `Имя: ${input.name}, Возраст: ${input.age}`;
    }
}
// Примеры вызова функции
const person = { name: "Иван", age: 30 };
const persons = [
    { name: "Анна", age: 25 },
    { name: "Петя", age: 20 }
];
console.log(processData(person)); // Вывод: Имя: Иван, Возраст: 30
console.log(processData(persons)); // Вывод: 2

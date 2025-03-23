interface Person {
    name: string;
    age: number;
}

// Перегрузка функций
function processData(person: Person): string;
function processData(persons: Person[]): number;

// Реализация функции
function processData(input: Person | Person[]): string | number {
    if (Array.isArray(input)) {
        return input.length; // Возвращаем длину массива
    } else {
        // Возвращаем строку с информацией о Person
        return `Имя: ${input.name}, Возраст: ${input.age}`;
    }
}

// Примеры вызова функции
const person: Person = { name: "Иван", age: 30 };
const persons: Person[] = [
    { name: "Анна", age: 25 },
    { name: "Петя", age: 20 }
];

console.log(processData(person)); // Вывод: Имя: Иван, Возраст: 30
console.log(processData(persons)); // Вывод: 2
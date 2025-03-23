"use strict";
class Collection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items.splice(index, 1)[0];
        }
        return undefined; // Если индекс вне диапазона
    }
    get(index) {
        return this.items[index];
    }
    size() {
        return this.items.length;
    }
}
// Условные типы
let variable;
// Пример условия для определения типа
const condition = true; // Измените на false для теста
if (condition) {
    variable = "Hello, TypeScript!";
}
else {
    variable = true;
}
const message = typeof variable === "string" ? "Это строка" : "Это boolean";
const person = {
    name: "Иван",
    age: 30,
};
// Пример использования обобщенного типа
const personName = person.name; // string
const personAge = person.age; // number
console.log(personName); // Вывод: Иван
console.log(personAge); // Вывод: 30

"use strict";
class Child {
    constructor(age) {
        this.age = age; // Инициализация поля age
    }
}
// Пример использования класса Child
const child1 = new Child(5);
console.log(`Возраст ребенка: ${child1.age}`); // Вывод: Возраст ребенка: 5
// Попытка изменить значение age вызовет ошибку
// child1.age = 6; // Ошибка: Cannot assign to 'age' because it is a read-only property

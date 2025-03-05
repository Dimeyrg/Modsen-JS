"use strict";

// Класс Сотрудник
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Метод для расчета годовой зарплаты
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Подкласс Менеджер
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); // Вызов конструктора родительского класса
        this.department = department;
        this.bonusPercentage = 0.1; // Бонус 10%
    }

    // Переопределение метода расчета годовой зарплаты
    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = baseSalary * this.bonusPercentage;
        return baseSalary + bonus;
    }
}

// Создание экземпляров класса Менеджер
const manager1 = new Manager("Alice", 5000, "Sales");
const manager2 = new Manager("Bob", 6000, "Marketing");

// Расчет и вывод годовой зарплаты
console.log(`Годовая зарплата ${manager1.name}: ${manager1.calculateAnnualSalary()}$`); // Вывод: 66000$
console.log(`Годовая зарплата ${manager2.name}: ${manager2.calculateAnnualSalary()}$`); // Вывод: 79200$
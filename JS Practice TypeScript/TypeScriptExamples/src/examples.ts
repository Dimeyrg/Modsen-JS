// Интерфейс для операций над коллекциями
interface ICollection<T> {
    add(item: T): void; // Добавление элемента
    remove(index: number): T | undefined; // Удаление элемента по индексу
    get(index: number): T | undefined; // Получение элемента по индексу
    size(): number; // Получение размера коллекции
}

class Collection<T> implements ICollection<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(index: number): T | undefined {
        if (index >= 0 && index < this.items.length) {
            return this.items.splice(index, 1)[0];
        }
        return undefined; // Если индекс вне диапазона
    }

    get(index: number): T | undefined {
        return this.items[index];
    }

    size(): number {
        return this.items.length;
    }
}

// Условные типы
let variable: boolean | string;

// Пример условия для определения типа
const condition = true; // Измените на false для теста

if (condition) {
    variable = "Hello, TypeScript!";
} else {
    variable = true;
}

// Исправленный код
type VariableType = "Это строка" | "Это boolean";
const message: VariableType = typeof variable === "string" ? "Это строка" : "Это boolean";

// Обобщенный тип для получения значения по ключу
type ValueType<T, K extends keyof T> = T[K];

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Иван",
    age: 30,
};

// Пример использования обобщенного типа
const personName: ValueType<Person, "name"> = person.name; // string
const personAge: ValueType<Person, "age"> = person.age;   // number

console.log(personName); // Вывод: Иван
console.log(personAge); // Вывод: 30
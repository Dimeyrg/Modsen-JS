"use strict";
function identifyElement(element) {
    if (typeof element === "number") {
        return "Это число";
    }
    else if (typeof element === "string") {
        return "Это строка";
    }
    else if (typeof element === "object" && element !== null) {
        return "Это объект";
    }
    else if (element === null) {
        return "Это null"; // Обработка случая, когда элемент равен null
    }
    else {
        return "Неизвестный тип"; // На случай, если передан другой тип
    }
}
// Примеры вызова функции
console.log(identifyElement(42)); // Вывод: Это число
console.log(identifyElement("Hello")); // Вывод: Это строка
console.log(identifyElement({ key: 'value' })); // Вывод: Это объект
console.log(identifyElement(null)); // Вывод: Это null

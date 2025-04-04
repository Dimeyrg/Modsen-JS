"use strict";
// Функция, использующая оператор switch
function handleStringValue(value) {
    switch (value) {
        case "case1":
            console.log("Handled case 1");
            break;
        case "case2":
            console.log("Handled case 2");
            break;
        case "case3":
            console.log("Handled case 3");
            break;
        default:
            // Если значение не соответствует ни одному из случаев, выбрасываем ошибку
            throw new Error(`Unhandled case: ${value}`);
    }
}
// Примеры вызова функции
handleStringValue("case1"); // Вывод: Handled case 1
handleStringValue("case2"); // Вывод: Handled case 2
handleStringValue("case3"); // Вывод: Handled case 3
// handleStringValue("unknown"); // Вызывает ошибку, так как это не предусмотренный случай

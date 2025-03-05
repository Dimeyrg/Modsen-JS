"use strict";

// Функция для извлечения данных из нескольких API с использованием async/await
async function fetchMultipleAPIs(apiUrls) {
    // Создаем массив промисов для каждого URL
    const promises = apiUrls.map(url => 
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка при загрузке: ${response.statusText}`);
            }
            return response.json(); // Преобразуем ответ в JSON
        })
    );

    try {
        // Ожидаем выполнения всех промисов
        const results = await Promise.all(promises);
        // Возвращаем объединенный результат
        return results; 
    } catch (error) {
        console.error(error.message); // Обработка ошибок
        return null; // Возвращаем null в случае ошибки
    }
}

// Пример использования с реальными API
const apiUrls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
];

// Вызов функции и вывод результатов
fetchMultipleAPIs(apiUrls)
    .then(results => {
        if (results) {
            results.forEach((result, index) => {
                console.log(`Результат от API ${index + 1}:`, JSON.stringify(result, null, 2));
            });
        } else {
            console.log("Не удалось извлечь данные.");
        }
    });
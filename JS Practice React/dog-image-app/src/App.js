import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Не забудьте создать файл стилей

const DogImage = () => {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDogImage();
    }, []);

    const fetchDogImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setDogImage(response.data.message);
        } catch (error) {
            console.error('Ошибка при получении изображения:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dog-container">
            <h1>Случайное изображение собаки</h1>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <img src={dogImage} alt="Собака" className="dog-image" />
            )}
            <button onClick={fetchDogImage} className="new-image-button">Получить новое изображение</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <DogImage />
        </div>
    );
};

export default App;
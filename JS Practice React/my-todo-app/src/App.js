import React, { useState } from 'react';
import './App.css'; // Не забудьте создать файл стилей

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTasks([...tasks, { id: Date.now(), text: inputValue.trim() }]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Добавьте новую задачу"
                    className="todo-input"
                />
                <button type="submit" className="add-button">Добавить</button>
            </form>
            <ul className="todo-list">
                {tasks.map((task) => (
                    <li key={task.id} className="todo-item">
                        {task.text}
                        <button 
                            className="delete-button" 
                            onClick={() => handleDeleteTask(task.id)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <TodoList />
        </div>
    );
};

export default App;
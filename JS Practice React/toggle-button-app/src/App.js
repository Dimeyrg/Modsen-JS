import React, { Component } from 'react';
import './App.css'; // Не забудьте создать файл стилей, если нужно

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true, // Начальное состояние
        };
    }

    toggleButton = () => {
        this.setState(prevState => ({
            isShown: !prevState.isShown, // Меняем состояние
        }));
    };

    render() {
        const buttonText = this.state.isShown ? 'Hide' : 'Show'; // Определяем текст кнопки

        return (
            <div className="button-container">
                <button onClick={this.toggleButton} className="toggle-button">
                    {buttonText}
                </button>
            </div>
        );
    }
}

const App = () => {
    return (
        <div>
            <h1>Toggle Button Example</h1>
            <ToggleButton />
        </div>
    );
};

export default App;
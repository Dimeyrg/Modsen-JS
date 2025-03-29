import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time);
  const isRunning = useSelector((state) => state.isRunning);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    } else if (time === 0) {
      dispatch({ type: "STOP_TIMER" });
    }
    return () => clearInterval(timer);
  }, [isRunning, time, dispatch]);

  const handleMinutesChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setMinutes(value);
  };
  
  const handleSecondsChange = (e) => {
    let value = Math.max(0, parseInt(e.target.value) || 0);
    if (value > 59) value = 59; // Ограничиваем секунды до 59
    setSeconds(value);
  };

  const setTime = () => {
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds > 0) {
      dispatch({ type: "SET_TIME", payload: totalSeconds });
    }
  };

  const startTimer = () => {
    if (time > 0) dispatch({ type: "START_TIMER" });
  };

  const stopTimer = () => {
    dispatch({ type: "STOP_TIMER" });
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    dispatch({ type: "RESET_TIMER" });
  };

  return (
    <div className="App">
      <h1>Таймер</h1>
      <div className="time-display">
        {Math.floor(time / 60).toString().padStart(2, "0")}:
        {(time % 60).toString().padStart(2, "0")}
      </div>
      <div className="inputs">
        <input
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          placeholder="Минуты"
          min="0"
        />
        <input
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
          placeholder="Секунды"
          min="0"
          max="59"
        />
        <button onClick={setTime}>Установить</button>
      </div>
      <div className="buttons">
        <button onClick={startTimer} disabled={isRunning}>
          Старт
        </button>
        <button onClick={stopTimer}>Стоп</button>
        <button onClick={resetTimer}>Сброс</button>
      </div>
    </div>
  );
};

export default App;
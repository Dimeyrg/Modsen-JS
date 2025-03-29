import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, start, tick } from './timerSlice';

function TimerApp() {
  const dispatch = useDispatch();
  const { minutes, seconds, isRunning } = useSelector((state) => state.timer);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const handleStart = () => {
    dispatch(setTime({ minutes: parseInt(inputMinutes), seconds: parseInt(inputSeconds) }));
    dispatch(start());
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Таймер</h1>
        <div style={styles.inputs}>
          <input
            type="number"
            min="0"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            style={styles.input}
            placeholder="Мин"
          />
          <input
            type="number"
            min="0"
            max="59"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
            style={styles.input}
            placeholder="Сек"
          />
        </div>
        <button onClick={handleStart} disabled={isRunning} style={styles.button}>
          Старт
        </button>
        <div style={styles.timeDisplay}>
          <p style={styles.time}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
          {minutes === 0 && seconds === 0 && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>Время вышло!</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0f0',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '1rem',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  input: {
    width: '45%',
    padding: '0.5rem',
    fontSize: '16px',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  timeDisplay: {
    marginTop: '1.5rem',
  },
  time: {
    fontSize: '32px',
    fontFamily: 'monospace',
  },
};

export default TimerApp;
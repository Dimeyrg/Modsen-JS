import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Счётчик</h1>
        <div className="count">{count}</div>
        <div className="buttons">
          <button className="btn btn-green" onClick={() => dispatch(increment())}>
            Увеличить
          </button>
          <button className="btn btn-red" onClick={() => dispatch(decrement())}>
            Уменьшить
          </button>
          <button className="btn btn-gray" onClick={() => dispatch(reset())}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
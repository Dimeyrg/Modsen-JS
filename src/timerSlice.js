// src/timerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  },
  reducers: {
    setTime: (state, action) => {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
    start: (state) => {
      state.isRunning = true;
    },
    stop: (state) => {
      state.isRunning = false;
    },
    tick: (state) => {
      if (state.minutes === 0 && state.seconds === 0) {
        state.isRunning = false;
        return;
      }
      if (state.seconds === 0) {
        state.minutes -= 1;
        state.seconds = 59;
      } else {
        state.seconds -= 1;
      }
    },
  },
});

export const { setTime, start, stop, tick } = timerSlice.actions;
export default timerSlice.reducer;
const initialState = {
    time: 0, 
    isRunning: false, 
  };
  
  const timerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TIME":
        return { ...state, time: action.payload };
  
      case "START_TIMER":
        return { ...state, isRunning: true };
  
      case "TICK":
        return state.time > 0 ? { ...state, time: state.time - 1 } : { ...state, isRunning: false };
  
      case "STOP_TIMER":
        return { ...state, isRunning: false };
  
      case "RESET_TIMER":
        return { ...state, time: 0, isRunning: false };
  
      default:
        return state;
    }
  };
  
  export default timerReducer;
import React, { useState, useEffect } from 'react';
import useGlobalState from './useGlobalState.js';
import './Countdown.css';

const Countdown = () => {
  const [seconds, setSeconds] = useState(30);
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    let interval = null;
    if (!state.timesUp && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      dispatch({type: "INVALIDATE_TIMER"});
      setSeconds(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);
  
  if (state.timesUp === false) {
    return (
        <h3 className="Countdown">{seconds}s</h3>
    );
  }
  else {
    return (<h3 className="Countdown"></h3>);
  }
};

export default Countdown;

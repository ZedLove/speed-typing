import React, { useState, useEffect } from 'react';
import useGlobalState from './useGlobalState.js';

const Countdown = () => {
  const [seconds, setSeconds] = useState(5);
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    let interval = null;
    if (!state.timesUp && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      dispatch({type: "INVALIDATE_TIMER"});
      console.log('countdown done');
      setSeconds(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);
  
  if (state.timesUp === false) {
    return (
        <div className="time">{seconds}s</div>
    );
  }
  else {
    return (<div></div>);
  }
};

export default Countdown;

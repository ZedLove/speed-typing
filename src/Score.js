import React from 'react';
import useGlobalState from './useGlobalState.js';
import './Score.css';

const Score = () => {
  const [state] = useGlobalState();

  return (
      <h3 className="Score">{state.score}pts</h3>
  );
}

export default Score;

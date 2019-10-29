import React from 'react';
import useGlobalState from './useGlobalState.js';

const Score = () => {
  const [state] = useGlobalState();

  return (
      <div>Score: {state.score}</div>
  );
}

export default Score;

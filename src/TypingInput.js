import React, { useEffect, useState } from 'react';
import useGlobalState from './useGlobalState.js';

const TypingInput = () => {

  const [word, setWord] = useState('');
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    if (word === state.targetWord && state.timesUp === false) {
      console.log('word is ' + state.targetWord);
      setWord('');
      dispatch({type: "NEXT_WORD"});
      dispatch({type: "INCREMENT_SCORE"});
    }
  }, [word, state.targetWord, state.timesUp, dispatch]);
  
  const changeInput = (evt) => {
    evt.persist();
    setWord(evt.target.value);
  };

  
  if (state.timesUp === false) {
    return (
        <form className="TypingInput" onSubmit={changeInput}>
        <label htmlFor="word">Type {state.targetWord} </label>
          <input className="word" name="word" type="text" value={word} onChange={changeInput} autoFocus />
        </form>
    );
  }
  else {
    return (<div>Time is up!</div>);
  }
}

export default TypingInput;

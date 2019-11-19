import React, { useEffect, useState } from 'react';
import useGlobalState from './useGlobalState.js';


// the heroku app for random words appears to be down.
// instead, I'm using a random Kanye West quote API
// this function returns a random word of at least
// three characters in length
const pluckWordFromQuote = (quote) => {
  const re = /(\w+)/g;
  const words = quote.split(" ").reduce((acc, w) => {
    // only take words, only > 3 chars
    const cleansed = w.toLowerCase().match(re)[0] || '';
    if (cleansed.length > 3) {
      acc.push(cleansed);
    }
    return acc;
  }, []);
  const word = words[Math.floor(Math.random()*words.length)];
  return word;
}

const fetchNewWord = (url, dispatch) => {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      const newTarget = pluckWordFromQuote(res.quote);
      dispatch({type: 'NEXT_WORD', payload: newTarget});
    })
    .catch(() => dispatch({type: 'FETCH_ERROR'})) // TODO - error case
}

const TypingInput = () => {

  const [word, setWord] = useState('');
  const [state, dispatch] = useGlobalState();
  //  API KEY for https://random-word-api.herokuapp.com/
  //  const API_KEY = 'R3SBGZYG';
  const [url, setUrl] = useState('https://api.kanye.rest/');

  useEffect(() => {
    if (word === state.targetWord && state.timesUp === false) {
      setWord('');
      dispatch({type: 'NEXT_WORD'});
      dispatch({type: 'INCREMENT_SCORE'});
    }
    else if (!state.targetWord) {
      fetchNewWord(url, dispatch);
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

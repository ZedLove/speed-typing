// This is an attempt to create a custom hook that would
// fetch data from an endpoint (in this case, hard-coded random text)

// I got stuck trying to figure out how to tie this into the
// React Hooks pattern, specifically trying to get it to populate
// my shared global state in useGlobalState

import { useState, useEffect } from 'react';
import useGlobalState from './useGlobalState.js';

// the heroku app for random words appears to be down.
// instead, I'm using a random Kanye West quote API
// this function returns a random word of at least
// three characters in length
const pluckWordFromQuote = (quote) => {
  const words = quote.split(" ");
  const word = words[Math.floor(Math.random()*words.length)];
  if (word.length < 3) {
    return pluckWordFromQuote(quote);
  }
  console.log('new word', word);
  return word;
}

const useFetch = () => {
  const [url, setUrl] = useState('https://api.kanye.rest/');
  const [state, dispatch] = useGlobalState();

  async function fetchData() {
    dispatch({type: "FETCH_INIT"});
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch({type: "FETCH_SUCCESS", payload: pluckWordFromQuote(json.quote)});
    }
    catch (error) {
      dispatch({type: "FETCH_ERROR"});
    }
  }

  useEffect(() => { fetchData() },[url]);
  return state;

};

export default useFetch;

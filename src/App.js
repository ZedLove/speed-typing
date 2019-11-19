import React from 'react';
import useGlobalState, { Provider } from "./useGlobalState.js";
import Countdown from './Countdown.js';
import TypingInput from './TypingInput.js';
import Score from './Score.js';
import './App.css';

const initialState = {score:      0,
                      targetWord: null,
                      timesUp:    false,
                      isLoading:  false,
                      isError:    false};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_WORD":
    return {
      ...state,
      targetWord: action.payload
    };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "INVALIDATE_TIMER":
      return {
        ...state,
        timesUp: !state.timesUp,
      };
    default:
      return state;
  }
}

const App = () => {

  return (
    <Provider reducer={reducer} initialState={initialState}>
      <div className="App">
        <header className="App-header">
          <h1>Speed Typing</h1>
          <Countdown />
          <Score />
        </header>
        <TypingInput />
      </div>
    </Provider>
  );
}

export default App;

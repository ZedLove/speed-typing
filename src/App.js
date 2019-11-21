import React from 'react';
import useGlobalState, { initialState, Provider, reducer } from "./useGlobalState.js";
import Countdown from './Countdown.js';
import TypingInput from './TypingInput.js';
import Score from './Score.js';
import './App.css';

const App = () => {

  return (
    <Provider reducer={reducer} initialState={initialState}>
      <div className="App">
        <header className="App-header">
          <h1>Speed Typing</h1>
          <div className="display">
            <Countdown />
            <Score />
          </div>
        </header>
        <TypingInput />
      </div>
    </Provider>
  );
}

export default App;

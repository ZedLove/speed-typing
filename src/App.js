import React from 'react';
import useFetch from './useFetch.js';
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
  // switch (action.type) {
  //   case 'FETCH_INIT':
  //     return {
  //       ...state,
  //       isLoading: true,
  //       isError: false
  //     };
  //   case 'FETCH_SUCCESS':
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: false,
  //       targetWord: action.payload,
  //     };
  //   case 'FETCH_FAILURE':
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   case "INCREMENT_SCORE":
  //     return {
  //       ...state,
  //       score: state.score + 1,
  //     };
  //   case "INVALIDATE_TIMER":
  //     return {
  //       ...state,
  //       timesUp: !state.timesUp,
  //     };
  //   default:
  //     return state;
  // }
  return state;
}

function App() {

  const [state, dispatch] = useGlobalState();
  
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

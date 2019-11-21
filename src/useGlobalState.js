// a custom React Hook to share global state across the app
// the initial state is defined in App.js and modified
// by the reducer function also defined in App.js

import React, { createContext, useContext, useReducer } from 'react';

export const initialState = {score:      0,
                             targetWord: null,
                             timesUp:    false,
                             isLoading:  false,
                             isError:    false};

export function reducer(state, action) {
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
    case "FETCH_ERROR":
    console.log('fetch error');
      return state; // TODO - get new word or display error
    default:
      return state;
  }
}

const StateContext = createContext(null);

export function Provider({ children, reducer, initialState }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

function useGlobalState() {
  return useContext(StateContext);
}

export default useGlobalState;

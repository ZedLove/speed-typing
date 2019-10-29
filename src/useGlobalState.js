// a custom React Hook to share global state across the app
// the initial state is defined in App.js and modified
// by the reducer function also defined in App.js

import React, { createContext, useContext, useReducer } from 'react';

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

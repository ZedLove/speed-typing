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

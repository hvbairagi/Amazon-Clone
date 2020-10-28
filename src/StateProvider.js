import React, { createContext, useContext, useReducer } from "react"

// Prepares the dataLayer
export const StateContext = createContext();

// Wraps our app and provide the dataLayer to every component... just copy this out
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the dataLayer... Go to index.js and wrap the component
export const useStateValue = () => useContext(StateContext);
import React, { createContext, useReducer } from 'react';
import { appReducer } from '../reducers/app.reducer';

const initialState = {
  drawerIsOpen: false,
  cart: [],
  isLoggedIn: false,
  loading: false,
  alerts: [],
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

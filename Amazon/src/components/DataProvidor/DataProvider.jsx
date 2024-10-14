import React, { createContext, useContext, useReducer } from "react";

// prepares the dataLayer
export const DataContext = createContext();

// wrap our app and provide the Data Layer
export const DataProvider = ({ children, reduser, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reduser, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

// pull and push information from the data Layer
// export const useStateValue = () => useContext(StateContext);

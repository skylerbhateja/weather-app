import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [units, setUnits] = useState(false);

  const value = { units, setUnits };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

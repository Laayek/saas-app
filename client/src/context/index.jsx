import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  activeRoute: false,
};

export const ContextProvider = ({ children }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);

  return (
    <>
      <StateContext.Provider value={{ sidenavOpen, setSidenavOpen, isClicked, setIsClicked }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);

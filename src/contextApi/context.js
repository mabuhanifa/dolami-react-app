import { createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider value={{ rest: "hs" }}>{children}</Context.Provider>;
};


export default ContextProvider;
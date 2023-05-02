import { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

const Context = createContext();

const initialState = {
  state: data,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ rest: "hs" }}>{children}</Context.Provider>;
};

const useAvatar = () => {
  return useContext(Context);
};

export default ContextProvider;

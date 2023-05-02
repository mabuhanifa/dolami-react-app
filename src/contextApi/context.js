import { createContext, useContext, useReducer } from "react";
import { data } from "../data/data";

const Context = createContext();

const initialState = {
  data: data,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "MALE":
      return {
        ...state,
        data: state.data.filter((item) => item.gender === "male"),
      };
    case "FEMALE":
      return {
        ...state,
        data: state.data.filter((item) => item.gender === "female"),
      };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useAvatar = () => {
  return useContext(Context);
};

export default ContextProvider;

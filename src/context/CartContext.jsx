import { Children, createContext, useReducer } from "react";

const CartContext = createContext();

const reducer = () => {};
const initialState = {};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export default CartProvider;

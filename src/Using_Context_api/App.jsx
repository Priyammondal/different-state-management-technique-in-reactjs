import axios from "axios";
import React, { useReducer, createContext } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import Products from "./Products";

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
      break;
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload.id),
      };
      break;
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id == action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch({
        type: "ADD_PRODUCT",
        payload: response.data.products,
      });
    };
    getProducts();
  }, []);
  // console.log("state: ", state);
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div style={{ display: "flex" }}>
        <Products />
        <Cart />
      </div>
    </UserContext.Provider>
  );
};

export default App;

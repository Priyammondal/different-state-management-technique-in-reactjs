import React, { useEffect, useReducer } from "react";
import Prouducts from "./Products";
import Cart from "./Cart";
import axios from "axios";

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: action.payload,
        };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
        break;
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
        break;
      case "CHANGE_QTY":
        return {
          ...state,
          cart: state.cart.filter((item) =>
            item.id === action.payload.id
              ? (item.qty = action.payload.qty)
              : item.qty
          ),
        };
      default:
        return;
    }
  };
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

  //   console.log("state==>>", state);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Prouducts state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;

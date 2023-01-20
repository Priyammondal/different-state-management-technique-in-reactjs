import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "addProduct", payload: { products: data.products } })
        );
    };
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex"}}>
      <Products />
      <Cart />
    </div>
  );
};

export default App;

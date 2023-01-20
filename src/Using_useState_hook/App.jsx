import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((prod) => prod.id != id));
  };
  const changeQty = (id, qty) => {
    setCartItems(
      cartItems.filter((prod) => (prod.id == id ? (prod.qty = qty) : prod.qty))
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };
    getProducts();
  }, []);
  // console.log("products ==>", products);
  return (
    <div style={{ display: "flex" }}>
      <Products
        products={products}
        cartItems={cartItems}
        getCartItems={getCartItems}
        removeCartItem={removeCartItem}
      />
      <Cart cartItems={cartItems} changeQty={changeQty} />
    </div>
  );
};

export default App;

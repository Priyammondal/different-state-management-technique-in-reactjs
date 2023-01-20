import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./App";
import Pagination from "./Pagination";

const Products = () => {
  const { state, dispatch } = useContext(UserContext);
  const products = state.products;
  const cart = state.cart;
  const qty = 1;

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  const showProducts = products.slice(firstIndex, lastIndex);

  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        width: "80%",
        height: "fit-content",
        display: "flex",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        backgroundColor: "#E4C988",
        padding: "2rem",
      }}
    >
      <h1 style={{ width: "100%", color: "red", textAlign: "center" }}>
        Using Context API + useReducer()
      </h1>
      {showProducts.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexFlow: "column",
            gap: "10px",
            border: "1px solid gray",
            margin: "10px",
            lineBreak: "loose",
            width: "22%",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <img
            src={item.thumbnail}
            alt="item image"
            style={{ height: 140, objectFit: "cover" }}
          />
          <section>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
          </section>
          <section style={{ display: "flex", flexFlow: "column" }}>
            {cart.some((cartItem) => cartItem.id === item.id) ? (
              <button
                style={{ backgroundColor: "tomato", cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: item.id,
                    },
                  })
                }
              >
                Remove From Cart
              </button>
            ) : (
              <button
                style={{ backgroundColor: "green", cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: item.id,
                      title: item.title,
                      img: item.thumbnail,
                      qty: qty,
                      price: item.price,
                    },
                  })
                }
              >
                Add To Cart
              </button>
            )}
          </section>
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <Pagination
          getCurrentPage={getCurrentPage}
          totalProduct={products.length}
          productPerPage={postPerPage}
        />
      </div>
    </div>
  );
};

export default Products;

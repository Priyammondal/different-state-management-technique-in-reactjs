import React, { useState } from "react";
import Pagination from "./Pagination";

const Products = ({ state, dispatch }) => {
  const { products } = state;
  const [qty, setQty] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastIndex = postPerPage * currentPage;
  const startIndex = lastIndex - postPerPage;

  const ProductList = products.slice(startIndex, lastIndex);
  const getCurrentPage = (page) => {
    setCurrentPage(page);
  };

  console.log("products==>", products);
  console.log("ProductList==>", ProductList);

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
        padding:"2rem",
      }}
    >
      <h1 style={{width:"100%", color:"red", textAlign:"center"}}>Using useReducer() Hook</h1>
      {ProductList.map((prod) => {
        return (
          <div
            key={prod.id}
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
              src={prod.thumbnail}
              alt="product image"
              style={{ height: 140, objectFit: "cover" }}
            />
            <section>
              <p>{prod.title}</p>
              <p>$ {prod.price}</p>
            </section>

            <section style={{ width: "100%" }}>
              {state.cart.some((item) => item.id === prod.id) ? (
                <button
                  style={{
                    backgroundColor: "tomato",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: {
                        id: prod.id,
                      },
                    });
                  }}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  style={{
                    backgroundColor: "green",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        id: prod.id,
                        img: prod.thumbnail,
                        qty: qty,
                        title: prod.title,
                        price: prod.price,
                      },
                    });
                  }}
                >
                  Add To Cart
                </button>
              )}
            </section>
          </div>
        );
      })}
      <div style={{ width: "100%" }}>
        <Pagination
          getCurrentPage={getCurrentPage}
          productListLength={products.length}
          postPerPage={postPerPage}
        />
      </div>
    </div>
  );
};

export default Products;

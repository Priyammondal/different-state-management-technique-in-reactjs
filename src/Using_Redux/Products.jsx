import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";

export default function Products() {
  const { allProducts } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastIndex = postPerPage * currentPage;
  const firtsIndex = lastIndex - postPerPage;

  const currentProducts = allProducts.slice(firtsIndex, lastIndex);

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
        padding:"2rem",
      }}
    >
      <h1 style={{ width: "100%", color: "red", textAlign: "center" }}>
        Using Redux
      </h1>
      {currentProducts.map((product) => (
        <div
          key={product.id}
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
            src={product.thumbnail}
            alt="product image"
            style={{ height: 140, objectFit: "cover" }}
          />
          <section>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
          </section>
          <section style={{ display: "flex", flexFlow: "column" }}>
            {cartItems.some((item) => item.id === product.id) ? (
              <button
                style={{ backgroundColor: "tomato", cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "deleteFromCart",
                    payload: { id: product.id },
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
                    type: "addToCart",
                    payload: {
                      id: product.id,
                      img: product.thumbnail,
                      price: product.price,
                      qty: qty,
                      title: product.title,
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
          postLength={allProducts.length}
          productPerPage={postPerPage}
        />
      </div>
    </div>
  );
}

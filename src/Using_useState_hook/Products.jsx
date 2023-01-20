import React, { useState } from "react";
import Pagination from "./Pagination";

const Products = ({ products, cartItems, getCartItems, removeCartItem }) => {
  const qty = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  const showProduct = products.slice(firstIndex, lastIndex);

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
        Using useState() Hook
      </h1>
      {showProduct.map((product) => (
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
          <section style={{ width: "100%" }}>
            {cartItems.some((item) => item.id === product.id) ? (
              <button
                style={{
                  backgroundColor: "tomato",
                  cursor: "pointer",
                  width: "100%",
                }}
                onClick={() => removeCartItem(product.id)}
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
                onClick={() =>
                  getCartItems({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: qty,
                    img: product.thumbnail,
                  })
                }
              >
                Add To Cart
              </button>
            )}
          </section>
        </div>
      ))}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Pagination
          getCurrentPage={getCurrentPage}
          totalProduct={products.length}
          productPerPage={productPerPage}
        />
      </div>
    </div>
  );
};

export default Products;

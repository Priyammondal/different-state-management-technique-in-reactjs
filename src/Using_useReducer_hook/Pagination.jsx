import React from "react";
import { useEffect } from "react";

const Pagination = ({ getCurrentPage, productListLength, postPerPage }) => {
  const pages = [];
  const PageNumbers = () => {
    for (let i = 1; i <= Math.ceil(productListLength / postPerPage); i++) {
      pages.push(i);
    }
  };
  PageNumbers();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        widhth: "100%",
      }}
    >
      {pages.length > 0 &&
        pages.map((page) => (
          <button
            style={{
              padding: "1rem",
              margin: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "cadetBlue",
              borderRadius: "5px",
            }}
            onClick={()=>getCurrentPage(page)}
          >
            {page}
          </button>
        ))}
    </div>
  );
};

export default Pagination;

import React from "react";

const Pagination = ({ totalProduct, productPerPage, getCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pageNumbers.map((item) => (
        <button
          style={{
            padding: "1rem",
            margin: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "cadetBlue",
            borderRadius: "5px",
          }}
          key={item}
          onClick={() => getCurrentPage(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

import React from "react";

const Pagination = ({ getCurrentPage, totalProduct, productPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((page) => (
        <button
          style={{
            padding: "1rem",
            margin: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "cadetBlue",
            borderRadius: "5px",
          }}
          onClick={() => getCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

import React from "react";

const Pagination = ({ getCurrentPage, postLength, productPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postLength / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          style={{
            padding: "1rem",
            margin: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: "cadetBlue",
            borderRadius: "5px",
          }}
          onClick={() => getCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

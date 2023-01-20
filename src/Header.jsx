import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Heade = () => {
  return (
    <header
      style={{
        height: "5vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "#7286D3",
        position: "sticky",
        top: 0,
        zIndex: 11,
        width: "100%",
      }}
    >
      <h2
        style={{
          textTransform: "uppercase",
          marginLeft: "10px",
        }}
      >
        Different state management technique
      </h2>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/">useState()</Link>
        <Link to="/useReducer">useReducer()</Link>
        <Link to="/useContext">useContext()</Link>
        <Link to="/redux">Redux</Link>
      </div>
    </header>
  );
};

export default Heade;

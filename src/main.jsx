import React from "react";
import ReactDOM from "react-dom/client";
import App_useReducer from "./Using_useReducer_hook/App.jsx";
import App_Redux from "./Using_Redux/App.jsx";
import App_useState from "./Using_useState_hook/App.jsx";
import App_useContext from "./Using_Context_api/App.jsx";

import "./index.css";
import { Provider } from "react-redux";
import Store from "./Using_Redux/redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App_useState />} />
        <Route
          path="/redux"
          element={
            <Provider store={Store}>
              <App_Redux />
            </Provider>
          }
        />
        <Route path="/useReducer" element={<App_useReducer />} />
        <Route path="/useContext" element={<App_useContext />} />
      </Routes>
    </BrowserRouter>
  </>
);

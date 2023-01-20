import { configureStore } from "@reduxjs/toolkit";
import { myProducts, myCart } from "./reducers";

const store = configureStore({
  reducer: { products: myProducts, cart: myCart },
});

export default store;

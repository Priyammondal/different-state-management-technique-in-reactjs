import { createReducer } from "@reduxjs/toolkit";

export const myProducts = createReducer(
  {
    allProducts: [],
  },
  {
    addProduct: (state, action) => {
      state.allProducts = action.payload.products;
    },
  }
);

export const myCart = createReducer(
  {
    cartItems: [],
  },
  {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    reduceQty: (state, action) => {
      state.cartItems = state.cartItems.filter((item) =>
        item.id === action.payload.id
          ? (item.qty = action.payload.qty)
          : item.qty
      );
    },
    addQty: (state, action) => {
      state.cartItems = state.cartItems.filter((item) =>
        item.id === action.payload.id
          ? (item.qty = action.payload.qty)
          : item.qty
      );
    },
  }
);

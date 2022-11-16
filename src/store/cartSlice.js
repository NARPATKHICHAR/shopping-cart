import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../comp2/product";

const cartSlice = createSlice({
  name: "productCount",
  initialState: {
    value: 0,
    cartItems: [],
    searchProduct: PRODUCTS,
    userId: "",
  },

  reducers: {
    addProduct: (state, action) => {
      state.value = state.value + 1;
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeProduct: (state, action) => {
      // console.log(action);
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.value = state.value - 1;
    },
    searchFilter: (state, action) => {
      console.log("action", action);
      state.searchProduct = action.payload;
    },
    typeNames: (state, action) => {
      state.userId = action.payload;
      console.log("action.payload", action);
    },
  },
});

export const { addProduct, removeProduct, searchFilter, typeNames } =
  cartSlice.actions;
export default cartSlice.reducer;

// cartItemSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload);
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartItemSlice.actions;

export default cartItemSlice.reducer;

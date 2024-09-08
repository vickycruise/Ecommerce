// favItemSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favItemSlice = createSlice({
  name: "favItem",
  initialState,
  reducers: {
    addFavItem(state, action) {
      state.items.push(action.payload);
    },
    removeFavItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearFavItems(state) {
      state.items = [];
    },
  },
});

export const { addFavItem, removeFavItem, clearFavItems } =
  favItemSlice.actions;

export default favItemSlice.reducer;

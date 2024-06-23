import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearAll } = CartSlice.actions;

export default CartSlice.reducer;

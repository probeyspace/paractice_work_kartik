import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const id = product.id;

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {
          ...product,
          quantity: 1,
        };
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;

      if (!state.items[id]) return;

      state.items[id].quantity -= 1; //state.items[id].quantity = state.items[id].quantity-1

      if (state.items[id].quantity <= 0) {
        delete state.items[id];
      }
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;

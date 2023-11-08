import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediteranean Pizza",
      quantity: 1,
      unitPrice: 10,
      totalPrice: 10,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      const index = state.cart.filter(
        (item) => item.pizzaId !== action.payload
      );
      state.cart.splice(index, 1);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

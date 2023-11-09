import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],

}

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart: (state, action) => {
  const item = action.payload
  const existItem = state.cartItems.find((x) => x.id === item.id )
  if (exis)
},
  removeFromCart: (state, action) => {},
},
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
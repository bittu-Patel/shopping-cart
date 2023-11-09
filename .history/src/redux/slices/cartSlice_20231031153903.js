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
  if (existItem) {
    state.cartItems = state.cartItems.map((x) =>
    x.id === existItem.id ? item : x
    )
  }else {
    state.cartItems = [...state.cartItems, item]
  }
  state.itemsPrice = addDecimals(
    state cartItems
  )
},
  removeFromCart: (state, action) => {},
},
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
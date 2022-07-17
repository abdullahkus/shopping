import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer
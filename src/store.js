import { configureStore } from "@reduxjs/toolkit";
import productReducer from './stores/productSlice';
import cartReducer from './stores/cartSlice';
export default configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
})
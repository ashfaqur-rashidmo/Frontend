import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice.jsx';
import productSlice from './Product';

 const Store = configureStore(
    {
        reducer: {
            cart: cartSlice,
            product: productSlice
        }
        
    }
 )
 export default Store;
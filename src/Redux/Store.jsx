import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice.jsx';
import productSlice from './Product.jsx';

 const Store = configureStore(
    {
        reducer: {
            cart: CartSlice,
            product: productSlice
        }
        
    }
 )
 export default Store;
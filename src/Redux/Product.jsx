import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products:[],
    searchTerm:'',
    filteredData:[]
}

const Product = createSlice(
    {
        name:'Products',
        initialState,
        reducers: {
            setProducts(state,action){
              state.products = action.payload
            },
            setSearchTerm(state,action){
               state.searchTerm = action.payload
                state.filteredData = state.products.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        },
    }
)

export const {setProducts,setSearchTerm} = Product.actions;

export default Product.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{product:[]},
    reducers:{
        cartAdd: (state) => {
            state.product.push({id: state.id, name: state.name, price: state.price})
        },
        cartDel: (state) => {
            state.product.splice(state.id,1)
        }
    }
})

export const {cartAdd, cartDel} = cartSlice.actions
export default cartSlice.reducer;
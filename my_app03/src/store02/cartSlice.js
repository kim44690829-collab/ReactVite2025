import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartList',
    initialState:{cartLists:[]},
    reducers:{
        addCartList: (state, action) => {
            // state.cartLists = state.cartLists.push({id:state.cartLists.id, name:state.cartLists.title, images:state.cartLists.images, price:state.cartLists.price, quantity:1})
            state.cartLists.push(action.payload)
            // console.log(state.cartLists)
        },
    }
})

export const {addCartList} = cartSlice.actions
export default cartSlice.reducer
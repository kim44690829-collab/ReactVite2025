import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:'product',
    initialState: {items:[]},
    // 동기적으로 상태를 변경하는 함수들 모임
    // reducers:{} -> 변화가 있어야함.
    reducers:{
        // set + 작명 : 업데이트의 의미를 가지는 함수를 생성하기로 약속
        setProduct:(state, action) => {
            state.items = action.payload
        }
    }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer
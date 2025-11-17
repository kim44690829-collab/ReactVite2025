import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState: {items:[]},
    reducers:{
        // 장바구니 담기
        addItem: (state,action) => {
            // 만약 선택한 상품이 담겨있으면 수량만 1증가
            // 존재의 유무 : find
            const newItem = action.payload // newItem = {id:1 ~~~~~}
            const existIndex = state.items.find((item) => item.id === newItem.id)
            // 얕은복사는 배열, 오브젝트 둘다 사용가능하지만
            // push()는 배열에서만 사용할수있다.
            if(existIndex === undefined){
                // 장바구니에 같은상품이 존재하지 않는다. => push하면서 수량까지 넣어야함
                // let newItemCopy = [...newItem]
                // state.items.push(newItemCopy) // 이 방식은 수량을 기존 제이슨 데이터에 추가불가
                state.items.push({...newItem, quantity:1}) 
                // ...newItem : 스프레드 문법(spread Operator)
                // newItem을 펼쳐서 보여준다.
                // const newItem = {
                //  id:1, name:'사과', price:1000
                // }
                // 이 펼친 곳에 quantity:1을 삽입시킨다. 
            }else{
                // 같은 상품이 존재
                existIndex.quantity += 1
            }
        },
        removeItem: (state, action) => {
            // findIndex이용
            const delItem = state.items.findIndex((item) => item.id === action.payload)
            console.log('222222222222', action.payload)
            if(delItem !== -1){
                state.items.splice(delItem,1)
            }
        },
        plusItem: (state, action) => {
            console.log('1111', action.payload)
            const newItem01 = action.payload
            // state없이 초기값인 items에 접근 불가
            const existIndex01 = state.items.find((item) => item.id === newItem01.id)
            if(existIndex01 !== undefined){
                existIndex01.quantity += 1;
            }
        },
        minusItem: (state, action) => {
            const newItem02 = action.payload
            const existIndex02 = state.items.find((item) => item.id === newItem02.id)
            if(existIndex02 !== undefined){
                existIndex02.quantity -= 1;
            }
        }
    }
})
export const { addItem, removeItem, plusItem, minusItem } = cartSlice.actions
export default cartSlice.reducer
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    // name은 store에 저장될 key되는 이름, 대소문자 구분 해야함
    name:'cart',
    // items = [] 라는 빈배열을 생성했다. -> 초기값
    initialState:{ items:[]},
    // reducers는 로직을 짜는 부분
    reducers:{
        // 같은 상품은 수량만 증가하는 코드가 필요
        addItem: (state, action) => {
            // state.items.push({id:1, name:'사과', price:1000}) 이렇게 써도 추가가 되지만 사과만 추가가 됨 -> action없이 사용할수는 있다는 뜻
            console.log('삽입됐어?')
            console.log(action.payload)
            state.items.push(action.payload)
        },
        // removeItem으로 함수 -> 삭제
        removeItem: (state, action) => {
            console.log('id뭐야?')
            console.log(action.payload)
            // 같은 상품이 존재하면 삭제, 아니면 삭제 x
            // 배열이름.findIndex(() => 조건) => 존재하는 값의 index번호를 출력
            // 값이 존재하지 않으면 -1이 출력
            // const delIndex = state.items.findIndex((item) => item.id === action.payload)
            // if(delIndex !== -1){ // 찾는 값이 존재한다. => 삭제
            //     state.items.splice(delIndex,1)
            // }
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearItem: (state) => {
            state.items = []
        }
    }
})

// 위에서 작성한 로직, 이름 export로 내보내야함
export const {addItem, removeItem, clearItem} = cartSlice.actions; 
export default cartSlice.reducer; // switch ~ case문을 이용한 함수를 자동생성하는 부분
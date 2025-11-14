// 1단계 : slice파일 만들기 -> 리덕스의 상태 + 로직을 정의하는 부분
//        이 단계에서는 state 구조, state를 변경하는 reducer함수, action 생성 함수를 정의 (counterSlice.js)
//        생성하는 라이브러리는 createSlice() 를 import해야한다.
import {createSlice} from '@reduxjs/toolkit'
const countSlice = createSlice({
    // name, initialState, reducers 는 모두 예약어 -> 작명 x
    name:'counter', // state 이름으로 store로 접근할때 key로 사용
    // 초기값 0 , initialState : {item:[]} , initialState:{object: {id:1, name:'키위'}}
    // 'A', boolean 등 다 들어감
    initialState:{value:0}, 
    reducers:{
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        reset: (state) => {state.value = 0},
        // 5씩 더하는 함수를 생성 => action.payload를 이용해서 상태를 변경
        incrementByAmount:(state, action) => {state.value += action.payload}
    }
})

// countSlice.actions => action.type => {type:'counter/increment'} 등으로 자동생성한다.
export const {increment, decrement, reset, incrementByAmount} = countSlice.actions
console.log(countSlice.actions)
// countSlice.reducer는 switch(action.type) {case 'counter/increment' : return state.value + 1} 함수를 의미한다.
export default countSlice.reducer;
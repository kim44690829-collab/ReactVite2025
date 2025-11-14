// 2단계 : store.js 만들기
// Redux의 중앙 저장소 역할을 하는 부분이다.
// Slice를 store에 등록해야 컴포넌트에서 사용할 수 있다.
import { configureStore } from "@reduxjs/toolkit";
import countReducer from './ReduxToolkit/counterSlice';
import cartReducer from './CartEx/CartSlice';

export const store = configureStore({
    reducer:{
        // counter는 counterSlice.js파일의 name:'counter'와 반드시 같아야한다.
        counter: countReducer,
        cart:cartReducer,
    }
})
// useState() 훅을 import한다.
import React,{useState} from "react";
// 한번에 함수를 만들고 export까지 완성
export default function Counter02(){
    // useState()훅을 이욯하여 변수 지정
    // const[변수이름, set변수이름] = useState(초기값)
    const [count, setCount] = useState(0) //초기값 0 지정
    // const count_btn = () => setCount(count + 1)
    const count_btn = function(){
        setCount(count + 1)
    }
    return(
        <>
            <p>카운트 : {count}</p>
            <button type="button" onClick={count_btn}>증가</button>
        </>
    )
}
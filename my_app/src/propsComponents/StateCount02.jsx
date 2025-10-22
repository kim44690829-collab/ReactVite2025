// useState() 훅을 import한다.
import React,{useState} from "react";
// 한번에 함수를 만들고 export까지 완성
export default function Counter02(){
    console.log("1. 컴포넌트 마운트됨 - 함수 실행됨")
    // useState()훅을 이욯하여 변수 지정
    // const[변수이름, set변수이름] = useState(초기값)
    const [count, setCount] = useState(0) //초기값 0 지정
    console.log("2. useState 호출됨 - 초기값 0", count)
    // const count_btn = () => setCount(count + 1)

    console.log("3. 초기 랜더링 중... 화면에 count 표시됨")
    // const count_btn = function(){
    //     setCount(count + 1)
    // }
    return(
        <>
            <p>카운트 : {count}</p>
            <button type="button" onClick={() => {
                console.log("4.이벤트 발행 - setCount가 실행요청")
                setCount(count + 1)
                console.log("5. setCount 호출 후, 비동기 상태로 대기 중 ")}}>
                    증가
            </button>
            
        </>
    )
}
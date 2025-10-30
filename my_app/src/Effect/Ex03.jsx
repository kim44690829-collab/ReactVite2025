import { useEffect, useState } from "react";

export default function Ex03(){
    const [count, setCount] = useState(0)
    const Btn = () => {
        setCount(count + 1)
    }
    // const minusBtn = () => {
    //     setCount(count - 1)
    // }
    useEffect(() => {
        console.log(`현재 카운트: ${count}`)
    },[count])
    

    return(
        <>
            <h2>Counter with useEffect</h2>        
            <p>{count}</p>
            <button type="button" onClick={Btn}>-</button>
            <button type="button" onClick={Btn}>+</button>
            <p>콘솔을 확인하세요!  카운트가 변경될 때마다 로그가 출력됩니다.</p>
        </>
    )
}
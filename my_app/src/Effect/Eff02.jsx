import { useEffect, useState } from "react";
export default function Eff02(){
    const [count, setCount] = useState(0)
    // Effect 의 의존성배열 지정x => 랜더링 될때마다 useEffect 실행
    useEffect(() => {
        console.log('랜더링 발생')
    })

    return(
        <div>
            <p>카운트</p>
            <button type="button" onClick={() => setCount( count + 1 )}> +1 </button>
        </div>
    )
}
import { useEffect, useState } from "react";

export default function Ex08(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [mul, setMul] = useState(0)
    
    useEffect(() => {
        setMul(num1 * num2)
        console.log(`${num1} X ${num2} = ${mul}`)
    },[num1,num2])

    return(
        <>
            <h1>곱셈 계산기</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="숫자를 입력해주세요" />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="숫자를 입력해주세요" />
            <p>결과 :  {mul} </p>
            <p>콘솔을 열면 계산 과정도 확인할 수 있습니다!</p>
        </>
    )
}
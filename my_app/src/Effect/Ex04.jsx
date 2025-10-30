import { useEffect, useState } from "react";

export default function Ex04(){
    const [time, setTime] = useState(0)
    
    useEffect(() => {
        // setInterver(() => {},초)
        // setTimeOut(() => {},초)
        const timer = setInterval(() => {
            setTime(time + 1)
        }, 1000);

        return(() => clearInterval(timer))
    })

    return(
        <>
            <h1>자동 타이머</h1>
            <p>{time}</p>
            <p>초가 경과했습니다.</p>
        </>
    )
}
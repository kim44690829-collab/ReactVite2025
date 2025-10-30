import { useEffect, useState } from "react";

export default function Ex07(){
    // const curruntTime = new Date();
    // const [hour,setHour] = useState(curruntTime.getHours())
    // const [minutes,setMinutes] = useState(curruntTime.getMinutes())
    // const [seconds, setSeconds] = useState(curruntTime.getSeconds())
    const [curruntTime,setCurruntTime] = useState(new Date())

    useEffect(() => {
        const currunt = setInterval(() => {
            const currNow = new Date();
            setCurruntTime(currNow)
        }, 1000);

        return () => clearInterval(currunt)
    })

    // 두자리 출력
    const twoTime = (num) =>(num < 10 ? `0${num}` : num)

    const hour = twoTime(curruntTime.getHours())
    const minutes = twoTime(curruntTime.getMinutes())
    const seconds = twoTime(curruntTime.getSeconds())

    console.log(hour)
    console.log(minutes)
    console.log(seconds)
    return(
        <>
            <p>DIGITAL CLOCK</p>
            <p>{hour}:{minutes}:{seconds}</p>
            {/* 현재 지금 지역의 날짜를 영문법으로 출력 */}
            <p>{curruntTime.toLocaleDateString()}</p>
        </>
    )
}
import { useEffect, useState } from "react";

export default function Eff05(){
    const [time, setTime] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
                            console.log('1초마다 실행')
                            setTime(time+1)
                        },1000);
        
        return(() => clearInterval(timer))
    })

    return(
        <div>
            <p>⏰ {time}초 경과</p> 
        </div>
    )
}
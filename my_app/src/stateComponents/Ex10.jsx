// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate10(){
    
    const [count, setCount] = useState(0);
    return(
        <>
          <button onClick={() =>(count === 0 ? alert('못내려갑니다.') : setCount(count > 0 ? count-1 : 0))}>-</button>
          <span>{count}</span>
          <button onClick={() =>(count === 10 ? alert('못올라갑니다.') : setCount(count < 10 ? count+1 : 10))}>+</button>
        </>
    )
}
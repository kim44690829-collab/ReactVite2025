// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate06(){
    
    const [big, setBig] = useState(16)
    return(
        <>
            <p style={{fontSize: big + "px"}}>커지는 글씨!</p>
            <button onClick={() => {setBig(big+1)}}>크게</button>
        </>
    )
}
// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate09(){
    
    const[count, setCount] = useState(0)
    let text = ''
      if(count % 2 === 0){
        text =  "짝수입니다"
      }else{
        text =""
      }
    return(
        <>
            <p>{count}</p>
            <p>+</p>
            <p>{text}</p>
            <button onClick={() => setCount(count + 1)}>버튼</button>
        </>
    )
}
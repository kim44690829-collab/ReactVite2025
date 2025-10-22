// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate13(){
    
    const [text, setText] = useState('')
    return(
        <>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() =>  {setText('')}}>초기화</button>
          <p>{text}</p>
        </>
    )
}
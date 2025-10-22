// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate17(){
    
    const [change, setChange] = useState({color:'', fontSize:16})
    console.log(change.fontSize)
    return(
        <>
          <p style={{color:change.color, fontSize:change.fontSize}}>변하는 글자!</p>
          <button onClick={() => setChange({color:'red', fontSize: change.fontSize + 1})}>변화!</button>
        </>
    )
}
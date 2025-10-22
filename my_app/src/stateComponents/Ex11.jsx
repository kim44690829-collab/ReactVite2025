// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate11(){
    
    const [color, setColor] = useState('')
    return(
        <>
          <div style={{width:'500px', height:'300px', backgroundColor:color}}>
            <input type="text" onChange={(e) => setColor(e.target.value)} placeholder="예 : pink" />
          </div>
        </>
    )
}
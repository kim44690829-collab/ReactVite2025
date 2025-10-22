// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate08(){
    
    const [change, setChange] = useState('좋아요 👍')
    const change2 = () => {
        if(change === '좋아요 👍'){
            setChange('싫어요 👎')
        }else{
            setChange('좋아요 👍')
        }
    }
    return(
        <>
            <p>{change}</p>
            {/* <button onClick={() => setChange(change === '좋아요 👍' ? '싫어요 👎' : '좋아요 👍')}>변경</button> */}
            <button onClick={change2}>변경</button>
        </>
    )
}
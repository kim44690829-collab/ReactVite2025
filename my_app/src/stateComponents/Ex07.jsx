// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate07(){
    
    const [color, setColor] = useState('red')
    return(
        <>
            <div style={{width:"100px", height:"100px", backgroundColor:color}}></div>
            {/* <button onClick={() => {color === 'red' ? setColor('green') : color === 'green' ? setColor('blue') : setColor('red')}}>다음 색상</button> */}
            <button onClick={() => (color === 'red' ? setColor('green') : color === 'green' ? setColor('blue') : setColor('red'))}>다음 색상</button>
            {/* <button onClick={() => setColor(color === 'red' ? 'green' : color === 'green' ? 'blue' : 'red')}>다음 색상</button> */}
        </>
    )
}
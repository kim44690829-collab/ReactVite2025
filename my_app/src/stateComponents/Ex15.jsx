// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate15(){
    
    const [name, setName] = useState('홍길동')
    const [age, setAge] = useState(20)
    return(
        <>
          <span>{name}</span><span>({age})</span>
          <button onClick={() => setName('이순신') + setAge(30)}>정보 변경</button>
        </>
    )
}
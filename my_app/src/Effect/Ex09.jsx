import { useEffect, useState } from "react";

export default function Ex09(){
    const [message, setMessage] = useState('')
    const [list, setList] = useState([])
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        if(message !== ''){
            const listCopy = [...list]
            listCopy.push(message)
            setList(listCopy)
            console.log(`새 메시지 : ${message}`)
        }
        
        return(() => setMessage(''))
    },[btn])

    return(
        <>
            <h2>간단한 메시지 입력기</h2>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력하세요" />
            <button type="button" onClick={() => setBtn(!btn)}>전송</button>
            <ul>
                {list.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
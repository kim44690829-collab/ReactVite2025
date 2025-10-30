import { useEffect, useState } from "react";

export default function Ex05(){
    const [text, setText] = useState('');
    const [btn,setBtn] = useState(false)
    const textChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if(text.trim() !== ''){
            document.title = text;
        }else{
            document.title = '제목을 입력하세요';
        }
        
        return(() => setBtn(false))
    },[btn])

    return(
        <>
            <h1>Dynamic Title Generator</h1>
            <input type="text" onChange={textChange} value={text} placeholder="브라우저 탭 제목을 입력하세요"/>
            <button type="button" onClick={() => setBtn(true)}>바꾸기</button>
            <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!</p>
        </>
    )
}
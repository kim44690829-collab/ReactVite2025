// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate02(){
    // input 의 onChange() 함수 이용
    // onChang() 안에 element.target.value => input에 입력한 값을 가져올수 있다.
    // element.target.value = e.target.value
    const [inputContent, setInputContent] = useState("");

    return(
        <>
            <input type="text" onChange={(e) => {setInputContent(e.target.value)}} placeholder="입력하세요" />
            <p>입력한 내용 : {inputContent}</p>
        </>
    )
}
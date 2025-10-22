// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate05(){
    const [imgToggle, setImgToggle] = useState('/vite.svg')

    return(
        <>
            <button onClick={() => {setImgToggle(imgToggle === '/vite.svg' ? '' : '/vite.svg')}}>이미지 토글 <img src= {imgToggle} /></button>
        </>
    )
}
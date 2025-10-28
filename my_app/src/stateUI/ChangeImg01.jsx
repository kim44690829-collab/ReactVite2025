import { useState } from "react";

export default function ChangeImg01(){
    const [img, setImg] = useState(true)
    return(
        <>
            <div>
                {img ? <img src="/images/boy.png" alt="남성" /> : <img src="/images/girl.png" alt="여성" />}                
                <button type="button" onClick={() => setImg(img ? false : true)}>이미지 변경</button>
            </div>
        </>
    )
}
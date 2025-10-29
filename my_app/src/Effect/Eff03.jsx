import { useEffect, useState } from "react";

function Message(){
    // useEffect 의존성 빈배열
    useEffect(() => {
        console.log('Message 컴포넌트 나타남')

        // CleanUp 함수 => 언마운트 될때 실행되는 함수
        // 언마운트 => 업데이트가 끝나고 리 랜더링이 끝날때
        return(() => console.log('Message 컴포넌트 사라짐'))
    },[])

    return <p>안녕하세요</p>
}

export default function Eff03(){
    const [show ,setShow] = useState(true)

    return(
        <div>
            <button type="button" onClick={() => setShow(false)}>토글</button>
            {show && <Message />}
        </div>
    )

}
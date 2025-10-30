import { useEffect, useState } from "react";
import ChildEx06 from "../Effect/ChildEx06";

export default function Ex06(){
    const [toggle, setToggle] = useState(false)

    const changeToggle = () => {
        setToggle(!toggle);
    }

    return(
        <>
            <h1>Lifecycle Demo</h1>                
            <button type="button" onClick={changeToggle}>{toggle ? '컴포넌트 숨기기' : '컴포넌트 보기'}</button>
            {toggle && <ChildEx06 toggle = {toggle} setToggle = {setToggle} />}
            <p>F12를 눌러 콘솔을 확인하세요!</p>
            <p>컴포넌트에 마운트/언마운트 메시지가 출력됩니다.</p>
        </>
    )
}
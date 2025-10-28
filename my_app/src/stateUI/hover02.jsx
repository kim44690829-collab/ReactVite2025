import { useState } from "react";

export default function Hover02(){
    // isHovered가 false면 툴팁이 안보이는 상태
    const [isTooltip,setIsTooltip] = useState(false)
    return(
        <div>
            <button type="button" 
            onMouseEnter={() => setIsTooltip(true)}
            onMouseLeave={() => setIsTooltip(false)}
            >마우스를 올려보세요</button>
            {/* <div style={{display:isTooltip ? 'block' : 'none'}}>도움말 메시지</div> */}
            {isTooltip && <div>도움말 메시지</div>}
            {/* {isTooltip ? <div>도움말 메시지</div> : null} */}
        </div>
    )

}
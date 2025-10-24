import { use, useState } from "react";

// React는 화면상태도 데이터로 관리한다.
export default function ModalChange(){
    // 현재 모달 닫힘
    // 현재 isOpen == false
    const [isOpen, setIsOpen] = useState(false) //모달 닫힘 : false, 열림 : true
    
    return(
        <>
            <div>
                <button onClick={() => setIsOpen(true)}>모달 열기</button>
                {isOpen && <div>모달 내용</div>}
                {isOpen && <button onClick={() => setIsOpen(false)}>닫기</button>}
            </div>
        </>
    )
}
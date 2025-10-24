import { use, useState } from "react";

// 자식 컴포넌트 : 회원가입 창
export default function SignupForm(props){
    // 이름
    const [name, setName] = useState('')
    // 패스워드
    const [pw, setPw] = useState('')

    // 회원가입 함수
    const SignUp = () => {
        // 예외처리
        if(!name || !pw ){
            return alert('입력해주세요')
        }
        props.onSuccess(name)
    }
    // 가입 폼 화면
    return(
        <>
            <div className="SignForm">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호" />
                <button onClick={SignUp}>회원가입</button>
            </div>
        </>
    )

}
import { useState } from "react";
import LoginForm from '../member/LoginForm';
import  SignupForm from '../member/SignupForm';
import Message from "../member/Message";


// 부모 컴포넌트로 회원가입 상태, msg 관리
export default function AuthApp(){
    const [isLogin, setIsLogin] = useState(true)
    const [msg, setMsg] = useState('')

    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>로그인/회원가입☑</h2>
                <Message msg = {msg} />
                {/* 회원가입하고 회원가입 버튼 클릭하면 '회원가입완료! 환영합니다. {name}님' */}
                {/* 로그인하면 '환영합니다. {name}님' */}
                {isLogin ? <LoginForm onSuccess={(name) => setMsg(`환영합니다. ${name}님`)} /> : <SignupForm onSuccess={(name) => setMsg(`회원가입완료! 환영합니다. ${name}님`)}/>}
                <button onClick={() => {setIsLogin(!isLogin); setMsg('');}}>{isLogin? '회원가입하기' : '로그인'}</button>
            </div>
        </>
    )
}
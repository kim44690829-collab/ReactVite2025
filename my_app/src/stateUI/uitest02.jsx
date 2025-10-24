import { useState } from "react";

export default function LoginView(){
    // 로그아웃 상태
    // isLogin = false
    const [isLogin, setIsLogin] = useState(false)

    return(
        <>
            {isLogin ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? '로그아웃' : '로그인' }</button>
            {/* <button onClick={() => setIsLogin(isLogin === false ? true : false)}>{isLogin ? '로그아웃' : '로그인' }</button> */}
        </>
    )
}
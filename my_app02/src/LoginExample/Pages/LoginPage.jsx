import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    // id , pw 상태 저장 변수
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const {login} = useContext(AuthContext)
    // useNavigate훅을 변수로 지정
    const navigate = useNavigate();
    const [loginFalse, setLoginFalse] = useState(false)

    // id = admin && pw = 1234 로그인 성공
    // 로그인 성공일때 aleat창 '로그인 성공' -> Home으로 이동
    // 아니면 id, pw를 확인하세요

    const userId = (e) => {
        setId(e.target.value)
    }
    const userPw = (e) => {
        setPw(e.target.value)
    }

    const loginHandeler = () => {
        if(id === 'admin' && pw === '1234'){
            // 내가 입력한 id Home페이지에 가져가야함
            login(id) // AuthContext 에서 정의한 정보
            alert('로그인 성공')
            // 논리 구현 함수안에 Link를 쓰지 못함 -> useNavigate
            // navigate('/home') -> /home으로 이동
            // navigate(1) -> 현재 페이지보다 하나 앞 페이지로 이동
            // navigate(-1) -> 현재 페이지보다 하나 뒤 페이지로 이동
            // navigate(0) -> 페이지 새로고침
            navigate('/home')
        }else{
            setLoginFalse(true)
        }
    }

    return(
        <div>
            <h2>로그인</h2>
            <input type="text" value={id} onChange={userId} placeholder="아이디" />
            <input type="password" value={pw} onChange={userPw} placeholder="비밀번호" />
            <button type="button" onClick={loginHandeler}>로그인</button>
            {loginFalse && <p style={{color:'red'}}>아이디 혹은 비밀번호를 확인하세요</p>}
        </div>
    )
}
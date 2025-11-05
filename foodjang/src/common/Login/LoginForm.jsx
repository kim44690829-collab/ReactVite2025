import { useState } from "react"
import '../Login/LoginForm.css'
import { useContext } from "react"
import { loginContext } from "../../LoginContext"
import { Link } from 'react-router-dom'

export default function LoginForm(){
    // const {user, login} = useContext(loginContext);
    // 회원
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')

    // 비회원
    const [nonMem, setNonMem] = useState('')
    const [nonMemNum, setNonMemNum] = useState('')

    const submitHandeler = () => {
        
    }

    return(
            <div className="loginForm">
                <div className="login">
                    <h2>로그인</h2>
                    <div>
                        <h3>회원 로그인</h3>
                        <form>
                            <div className="formInput">
                                <input type="text" placeholder="아이디" value={userId} onChange={(e) => setUserId(e.target.value)}  />
                                <input type="password" placeholder="비밀번호" value={userPw} onChange={(e) => setUserPw(e.target.value)}  />
                            </div>
                            <button type="submit">로그인</button>
                        </form>
                        <div className="store">
                            <input type="checkbox" id="idStore" />
                            <label for="idStore">아이디 저장</label>
                        </div>
                        <button type="button" className="loginFormBtn1">🗨카카오톡으로 회원가입/로그인</button>
                        <div className="loginFormBtn2">
                            <button type="button" className="loginFormBtn2-1">회원가입</button>
                            <button type="button" className="loginFormBtn2-1">아이디 찾기</button>
                            <button type="button" className="loginFormBtn2-1">비밀번호 찾기</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="nonMember">
                        <h2>비로그인</h2>
                        <div>
                            <h3>비회원 주문조회 하기</h3>
                            <form>
                                <div className="formInput">
                                    <input type="text" placeholder="주문자명" value={nonMem} onChange={(e) => setNonMem(e.target.value)}  />
                                    <input type="text" placeholder="주문번호" value={nonMemNum} onChange={(e) => setNonMemNum(e.target.value)}  />
                                </div>
                                <button type="submit">확인</button>
                            </form>
                            <p>❗ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
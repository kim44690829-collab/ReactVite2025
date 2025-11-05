import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../contexts/AuthContext2'

// 로그인 폼 컴포넌트
export default function LoginForm2(){
    // AuthContext에서 user, login 데이터 가져옴
    const {user, setUser, login} = useContext(Authcontext);
    const [username, setUsername] = useState('')

    // 폼 제출시 실행되는 함수
    // form -> submit 
    const submitHandeler = (e) => {
        // 기본 폼 제출(새로고침) 막는 코드
        // e.preventDefault();
        // 입력값이 공백이면 경고창
        if(username.trim() === '') return alert('이름을 입력하세요')
        
        // login 함수 실행 -> 전역 상태에 로그인 정보 저장
        login(username)
    }



    return(
        <div>
            {/* user가 존재하면 (로그인이 된 상태면) */}
            {user?(
                <div>
                    {/* 로그인된 사용자 이름 출력 */}
                    <p>{user.name}님 로그인 되었습니다.</p>
                    {/* profile 링크 */}
                    <Link to='/profile'>
                        <button type='button'>프로필로 이동</button>
                    </Link>
                </div>
            ):(
                // user가 없으면 (로그인 안된 상태)
                <form onSubmit={submitHandeler}>
                    <h1>로그인</h1>
                    {/* 사용자 이름 입력하는 input */}
                    <input type='text' placeholder='이름 입력' value={username} onChange={(e) => setUsername(e.target.value)}/>

                    {/* 로그인 버튼 => 클릭하면 submitHandeler이 실행되어야함 */}
                    <button type='submit'>로그인</button>
                </form>
            )
        }
        </div>
    )
}
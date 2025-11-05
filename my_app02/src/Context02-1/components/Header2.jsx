// Link : 페이지 이동을 위한 React Router 컴포넌트
import {Link} from 'react-router-dom'
// useContext : Context 값을 가져올 수 있는 React Hook
import { useContext } from 'react'
// Authcontext : 내가 만든 데이터를 가져오기 위한 저장소
import { Authcontext } from '../contexts/AuthContext2'

// Header 컴포넌트 정의 (화면 상단 네비게이션 역할)
export default function Header2(){
    // useContext(Authcontext)를 통해 전역상태의 변수를 읽음
    // user : 현재 로그인 사용자 정보
    // logout : 로그아웃 함수
    const {user, logout} = useContext(Authcontext);

    return(
        <header>
            <h1>Context 인증 실습</h1>
            {/* 홈 링크 */}
            <Link to='/'>홈</Link>
            {/* user가 존재하면 (로그인 상태) 로그아웃 */}
            {/* user가 null이면 로그인 */}
            {user ? 
                (
                    <div>
                        {/* 프로필로 이동하는 링크 */}
                        <Link to='/profile'>프로필</Link>
                        {/* 로그아웃 버튼 클릭시 */}
                        <button type='button' onClick={logout}>로그아웃</button>
                    </div>
                ) : (
                    // user가 null인상태 (로그아웃상태)
                    // 로그인 페이지로 이동하는 링크만 보여줌
                    <Link to='/login'>로그인</Link>
                )
            }
        </header>
    )

}
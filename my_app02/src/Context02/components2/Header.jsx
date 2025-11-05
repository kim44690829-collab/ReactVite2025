import { AuthContext } from "../../AuthContext";
import { useContext } from "react";

export default function Header(){
    const {user, login, logout} = useContext(AuthContext);

    return(
        <header>
            <h1>Context 인증 실습</h1>
            <button type="button" onClick={login}>{user? '홈프로필' : '홈로그인'}</button>
            {user && <button type="button" onClick={logout}>로그아웃</button>}
        </header>
    )
}
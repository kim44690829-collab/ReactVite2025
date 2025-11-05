import { AuthContext } from "../../AuthContext";
import { useContext } from "react";

export default function LoginForm(){
    const {userLogin, login, loginBtn, userName, setUserName, loginSee} = useContext(AuthContext);
    return(
        <div>
            {userLogin? 
                <div>
                <h2>로그인</h2> 
                    <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <button type="button" onClick={loginBtn}>로그인</button>
                </div>
            :
            loginSee?  
            <div> 
                <p>로그인이 필요합니다.</p>
                <button type="button" onClick={login}>로그인 하러 가기</button>
            </div>
            : ''
            }
        </div>
    )
}
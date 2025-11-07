import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const logoutHandeler = () => {
        logout();
        // 로그아웃 이후 로그인페이지로 이동
        navigate('/')
    }

    return(
        <>
            <h2>HomePage</h2>
            {user ? 
            <>
                <p>환영합니다. {user}님</p> 
                <button type="button" onClick={logoutHandeler}>로그아웃</button>
            </>
            : <p>로그인이 필요합니다.</p> }
        </>
    )
}
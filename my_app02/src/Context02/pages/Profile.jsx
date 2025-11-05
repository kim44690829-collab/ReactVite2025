import { AuthContext } from "../../AuthContext";
import { useContext } from "react";

export default function Profile(){
    const {user, userName} = useContext(AuthContext)

    return(
        <>
            {user && 
            <div>
                <h2>프로필 페이지</h2>
                <p>안녕하세요, <strong>{userName}</strong>님!</p>
                <p>오늘도 좋은하루 되세요☀</p>
            </div>
            }
        </>
    )
}
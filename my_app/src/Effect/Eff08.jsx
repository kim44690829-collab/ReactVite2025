import { use, useEffect, useState } from "react";

export default function Eff08(){
    const [user,setUser] = useState([]);
    // 버튼 클릭으로 새로고침 제어할 상태변수
    const [reload, setReload] = useState(false);
    // 데이터를 불러오는 중인지 여부를 확인할 상태변수
    const [isLoad, setIsLoad] = useState(false);
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {setUser(data); })

        setTimeout(() => {
            //로딩 시작 상태 변경
            // setIsLoad(true) 
            setIsLoad(false)
        },3000);

        // return(() => {setReload(false); setIsLoad(false)})
    }, [reload]) // reLoad 값이 바뀔때마다 useEffct 재실행

    return(
        <div>
            <button type="button" onClick={() => {setReload(!reload); setIsLoad(true)}}>다시 불러오기</button>
            {isLoad ? <p>로딩중...</p> :
                <ul>
                    {user.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul> 
            }
        </div>
        
    )
}
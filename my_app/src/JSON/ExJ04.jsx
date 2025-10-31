import { useEffect, useState } from "react";
import UserList from "../JSON/UserList";

export default function ExJ04(){
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if(!res.ok){
                throw new Error(`에러 : ${res.status}`)
            }
            return res.json()
        })
        .then((data) => {
            setUsers(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => {
            console.log('요청 성공')
        })
    },[]) 

    return(
        <>
            <p>컴포넌트 분리 연습</p>
            <UserList users = {users} />
        </>
    )
}
import { useEffect, useState } from "react";

export default function ExJ05(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if(!res.ok){
                throw new Error(`에러 : ${res.status}`)
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => {
            console.log('요청 완료')
        })
    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        },3000)
        
        return(() => clearTimeout(timer))
    },[])

    // if(loading){
    //     return <p>불러오는 중...</p>
    // }

    return(
        <>
            {loading ? <p>불러오는 중...</p> : 
            <ul>
                {data.map((data) => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>}
            
        </>
    )
}
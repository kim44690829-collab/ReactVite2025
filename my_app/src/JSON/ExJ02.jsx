import { useEffect, useState } from "react";

export default function ExJ02(){
    const [data, setData] = useState([])
    const [errMsg,setErrMsg] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if(!res.ok){
                throw new Error('에러 : status : ' , res.status )
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
            // console.log(data)
        })
        .catch((err) => {
            setErrMsg(err.message)
        })
        .finally(() => {
            console.log('요청 완료')
        })
    },[])

    if(errMsg){
        return <p>에러 : {errMsg}</p>
    }

    const titleClick = (item) => {
        alert(item)
    }

    return(
        <>
            <p>게시글 5개</p>
            <ul>
                {data.slice(0,5).map((data) => (
                    <li key={data.id} onClick={() => titleClick(data.body)}>{data.title}</li>
                ))}
            </ul>
        </>
    )
}
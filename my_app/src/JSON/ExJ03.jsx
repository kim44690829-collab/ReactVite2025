import { useEffect, useState } from "react";

export default function ExJ03(){
    const [data, setData] = useState([])
    const [errMsg, setErrMsg] = useState(null)

    useEffect(() => {
        // fetch().then().then().catch().finally()
        fetch('https://jsonplaceholder.typicode.com/postss')
        .then((res) => {
            // res.ok -> boolean 데이터 타입(boolean : true,false만 가질수있는 데이터 타입)
            // react는 HTTP 400,500에러를 fetch가 잡지 못해서 res.ok로 error를 잡는것
            // res.status : 현재 오류 상태 (404)
            if(!res.ok){
                // console.log( res.status)
                // throw new Error('에러 : status' , res.status) //안나옴
                // throw new Error('에러 : status' + res.status)
                throw new Error(`에러 : status ${res.status}`)
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
        })
        // catch는 res.ok를 확인하는 부분이 없으면 출력 x
        .catch((err) => {
            setErrMsg(err.message)
        })
        .finally(() => {
            console.log('요청 성공')
        })
    },[])

    if(errMsg){
        return <p>{errMsg}</p>
        // return <p style={{color:'red'}}>데이터 요청 실패!</p>
    }

    return(
        <>
            <ul>
                {data.slice(0,10).map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
        </>
    )
}
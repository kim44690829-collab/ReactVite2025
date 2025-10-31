import { useEffect, useState } from "react";

export default function Exfetch(){
    // 1. 상태 변수
    // 로딩 중 표시
    // 현재 loading = true면 로딩중...
    // loading = false => 종료, 종료를 안하면 계속 로딩중
    const [loading, setLoading] = useState(true)
    // 가져온 데이터 저장
    const [data, setData] = useState([])
    // 에러 메시지 저장
    const [errMsg, setErrMsg] = useState(null)

    useEffect(() => {

        console.log("데이터 요청 시작")
        fetch('https://jsonplaceholder.typicode.com/users')
        // res는 Response 객체의 약어
        // 이미 리액트의 객체로 존재한다.
        .then((res) => {
            // 상태가 정상이면 true를 반환하고 정상이 아니면 false를 반환하는 res.ok = true(정상), false(오류)
            if(!res.ok){
                // HTTP 상태의 코드를 확인
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            // JSON 파싱(해석)
            return res.json()
        })
        .then((data) =>{
            // 지금 불러온 데이터는 이 부분에만 존재
            console.log('가져온 데이터', data)
            setData(data) // 상태를 저장
        })
        // err를 catch한다는 의미
        .catch((err) => {
            console.log('x 에러 발생', err)
            // 에러 상태를 저장
            // .message : response 객체가 가지고 있는 메서드
            setErrMsg(err.message)
        })
        // 실패하든 성공하든 무조건 실행
        .finally(() => {
            console.log('요청 완료')
            // 로딩 종료
            setLoading(false)
        })

    },[]) // <- 빈 배열을 이용해서 한번만 실행

    // 화면 표시
    // 데이터 불러오는 중... 이라고 출력하고 싶음
    // 조건 => loading = true;
    if(loading){
        return <p>데이터 불러오는 중...</p>
    }
    // 에러 출력
    if(errMsg){
        return <p>X 에러 : {errMsg}</p>
    }
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {data.map((data) => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
        </div>
    )
}
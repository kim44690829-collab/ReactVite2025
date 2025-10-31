import { useEffect, useState } from "react";

export default function ExJ01(){
    const [loading, setLoading] = useState(true)
    // const [data, setData] = useState([])
    // const [errMsg, setErrMsg] = useState(null)
    const [userId, setUserId] = useState(1)
    // user를 userId에 해당하는 부분만 출력되도록 물어보는 상태변수
    const [user, setUser] = useState(null)

    // userId를 증가시키는 함수
    // 핸들러 함수 : 본인혼자는 아무것도 못함.
    // 누군가 이벤트로 핸들러함수를 사용해줘야 비로소 실행되는 함수
    const click = () => {
        setUserId(userId + 1)
    }
    // console.log(userId)

    // JSON의 데이터를 받은 부분을 함수로 정의
    const JSONdata = () => {
        // JSON URL 부분의 파라미터 형식으로 userId를 가져온다
        // 사용 방법 ~~~/users/${userId} 
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        // res의 원문 : response (요청하다) -> 객체가 이미 react에 존재한다.
        // res로 줄여쓰는 이유 : 개발자들의 약속
        .then((res) => {
        //     if(!res.ok){
        //         throw new Error(`HTTP error! : status : ${res.status}`)
        //     }
            return res.json() // JSON 파싱(해석)
        })
        // res.json() 이 넘겨준 것을 매개변수에 저장(매개변수는 알아볼수 있게 잘)
        .then((data) => {
            console.log('가져온 데이터 : ' , data)
            setUser(data)
        })
        // .catch((err) => {
        //     console.log('X 에러 발생 : ', err)
        //     setErrMsg(err.message)
        // })
        // json에서 가져오는 데이터가 성공하든 실패하든 상관없이 무조건 출력
        .finally(() => {
            console.log('요청 완료')
            setLoading(false)
        })
    }

    // useEffect 사용해서 데이터 받아오기
    useEffect(() => {
        JSONdata()
    },[userId])


    if(loading){
        return <p>불러오는 중</p>
    }
    // if(errMsg){
    //     return <p>{errMsg}</p>
    // }
    return(
        <div>
            <p>현재 선택된 사용자 ID : </p>
            <p>{userId}</p>
            <button type="button" onClick={click}>다음 사용자 보기</button>
            {/* <p>{data.name}</p>
            <p>{data.email}</p> */}
            {/* user가 값이 존재하면 div 태그를 랜더해서 그려라 */}
            {user && 
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    )
}
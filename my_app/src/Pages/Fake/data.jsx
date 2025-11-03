import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 커스텀 훅 => 훅을 제조해서 만든 훅 useProduct()
// 커스텀 훅 안에 useState, useEffect, fetch() 만으로 구성된 함수
export default function useProduct(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            if(!res.ok){
                // throw new Error()는 인수 하나밖에 인식을 못함
                // 즉, throw new Error( a  , b  )라고 쓰면 a밖에 인식을 못하기때문에 ,를 쓰지 말고 ``을 사용하는게 맞음
                throw new Error(`에러 : ${res.status}`)
            }
            
            return res.json()
        })
        .then((data) => {
            setData(data)
            // console.log()에 ``을 사용하면 -> console.log(`json으로 받아온 데이터 : ${data}`) ->  [Object, Object]
            // 배열 또는 객체{}는 문자열로 바꿔서 출력하려고함
            // .toString() 자바스크립트가 가지고 있는 매서드 객체
            // Array나 Object의 기본 toString()은 사람이 알아볼수 없는 형태
            console.log('json으로 받아온 데이터' , data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => {
            console.log('요청 완료')
        })
    },[])

    // JSON에서 받아온 data 상태변수를 return을 이용하여 반환하여 준다.
    return data;
}
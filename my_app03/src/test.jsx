import { useEffect, useState } from "react";
// 반드시 axios는 import 해야함
import axios from 'axios'

export default function Test(){
    const [data, setData] = useState([])

    useEffect(() => {
        // load라는 비동기 함수를 만들어서 API 요청
        const load = async() => {
            try{
                // axios.get()이 API를 호출해서 가져오는 역할
                // async ~ await axios.get(URL) -> 공식
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data)
                setData(res.data.products)
            }catch(err){
                console.log('상품 데이터 호출 실패', err)
            }finally{
                console.log('요청완료')
            }
        }
        // 반드시 작성한 함수를 호출해야한다.
        load();
    },[])

    return(
        <>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}
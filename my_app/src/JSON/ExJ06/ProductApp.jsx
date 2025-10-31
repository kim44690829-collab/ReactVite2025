import { useEffect, useState } from "react";
import ProductList from '../ExJ06/ProductList'
import '../ExJ06/ProductApp.css'


export default function ProductApp(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?')
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


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/photos?`)
    //     .then((res) => {
    //         if(!res.ok){
    //             throw new Error(`에러 : ${res.status}`)
    //         }
    //         return res.json()
    //     })
    //     .then((data) => {
    //         const dataSlice = data.map((p) => ({
    //             id: p.id,
    //             name:p.title.slice(0,10),
    //             price:1000 * p.id,
    //             img:`https://picsum.photos/150?random=${p.id}`,
    //         }))
    //         setData(dataSlice)
    //     })
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    //     .finally(() => {
    //         console.log('요청 완료')
    //     })
    // },[])

    return(
        <>
            <h1>상품 목록</h1>
            <ProductList data = {data}  />
            {/* {data.slice(0,20).map((item) => (
                <img src={item.img} />
            ))} */}
        </>
    )
}
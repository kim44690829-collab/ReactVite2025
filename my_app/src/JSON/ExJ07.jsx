import { use, useEffect, useState } from "react";
import '../JSON/ExJ07.css'

export default function ExJ07(){
    const [data, setData] = useState([])
    const [rateDate, setRateDate] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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

    const [cate, setCate] = useState("men's clothing")
    let cateData = data.filter((item) => item.category === cate)

    return(
        <div>
            <button type="button" onClick={() => setRateDate(true)}>평점별</button>
            <button type="button" onClick={() => {setCate("men's clothing"); setRateDate(false);}}>men's clothing</button>
            <button type="button" onClick={() => {setCate("jewelery"); setRateDate(false);}}>jewelery</button>
            <button type="button" onClick={() => {setCate("electronics"); setRateDate(false);}}>electronics</button>
            <button type="button" onClick={() => {setCate("women's clothing"); setRateDate(false);}}>women's clothing</button>
            {rateDate ? 
            <ul>
                {data.rating.rate.sort((a, b) => b - a).map((item) => (
                    <li key={item.id}>
                        <img src={item.image} />
                        <p>{item.price}$</p>
                        <p><span>{item.title}</span><span>{rate}점</span></p>
                    </li>
                ))}
            </ul> 
            : 
            <ul>
                {cateData.map((item) => (
                    <li key={item.id}>
                        <p>{item.category}</p>
                        <img src={item.image} />
                        <p>{item.price}$</p>
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>}
        </div>
    )
}
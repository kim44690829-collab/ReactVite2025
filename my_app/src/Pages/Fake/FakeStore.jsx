import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Fake/FakeStore.css'

export default function FakeStore({data}){
    const [rateDate, setRateDate] = useState(false);
    const [cate, setCate] = useState("men's clothing")
    
    let cateData = data.filter((item) => item.category === cate)

    // 나중을 대비한 방지용 코드
    const rateFilter = data.filter((item) => item.rating.rate > 0)
    const rateCopy = [...rateFilter]
    const rateSort = rateCopy.sort(( a , b ) => b.rating.rate - a.rating.rate)

    return(
        <div>
            <button type="button" onClick={() => setRateDate(true)}>ratings</button>
            <button type="button" onClick={() => {setCate("men's clothing"); setRateDate(false);}}>men's clothing</button>
            <button type="button" onClick={() => {setCate("jewelery"); setRateDate(false);}}>jewelery</button>
            <button type="button" onClick={() => {setCate("electronics"); setRateDate(false);}}>electronics</button>
            <button type="button" onClick={() => {setCate("women's clothing"); setRateDate(false);}}>women's clothing</button>
            {/* {rateDate ?  */}
            <ul>
                {(rateDate ? rateSort : cateData).map((item) => (
                    <li key={item.id}>
                        <Link to={`/detail/${item.id}/`}>
                            <p>{item.category}</p>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </Link>
                            <p>{item.price}$</p>
                            <p>{item.rating.rate}</p>
                    </li>
                ))}

                {/* {data
                .slice()
                .sort((a, b) => b.rating.rate - a.rating.rate)
                .map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.price}$</p>
                        <p>
                            <span>{item.title}</span> <br/>
                            <span>{item.rating.rate}점</span>
                        </p>
                    </li>
                ))}
            </ul> 
            : 
            <ul>
                {cateData.map((item) => (
                    <li key={item.id}>
                        <p>{item.category}</p>
                        <img src={item.image} alt={item.title} />
                        <p>{item.price}$</p>
                        <p>{item.title}</p>
                    </li>
                ))} */}
            </ul>
        </div>
    )
}
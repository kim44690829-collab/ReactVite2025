import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../store02/productSlice01";
import { addItem } from "../store02/cartSlice01";

export default function Section({totalPrice, setTotalPrice}){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.product.items)
    
    // axios로 api호출
    useEffect(() => {
        const load = async() => {
            try{
                const res = await axios.get('https://dummyjson.com/products')
                console.log(res.data.products)
                // productSlice의 setProduct에 저장해야한다. 
                // 마치 useState 의 set~와 같이 사용한다.
                dispatch(setProduct(res.data.products))
            }catch(err){
                console.log('데이터 호출 실패', err)
            }finally{
                console.log('요청 완료')
            }
        }
        load();
    },[])
    // 장바구니에 상품이 클릭되어 담길때마다 aleat창
    const addHandeler = (item) => {
        dispatch(addItem(item))
        // setTotalPrice(totalPrice += item.price)
        alert(`${item.title}제품이 선택되었습니다.`)
    }
    
    return(
        <div>
            {/* <h3>상품 목록</h3> */}
            <div style={{display:'flex', flexWrap:'wrap', listStyle:'none', width:'2100px',height:'500px', margin:'0', padding:'0'}}>
                {items.map((item) => (
                    // <button type="button" key={item.id} onClick={() => dispatch(addItem(item))}>
                    <button type="button" key={item.id} onClick={() => addHandeler(item)}>
                        <img src={item.thumbnail} style={{width:'200px', height:'150px'}} />
                        <h4 style={{width:'200px', whiteSpace:'wrap' }}>{item.title}</h4>
                        <p>{item.price}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

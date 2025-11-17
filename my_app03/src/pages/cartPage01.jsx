import { useSelector, useDispatch } from "react-redux";
import { removeItem, plusItem, minusItem } from "../store02/cartSlice01";
import { useEffect, useState } from "react";

export default function CartPage({totalPrice, setTotalPrice}){
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const [total, setTotal] = useState(0)
    // 총계 함수
    useEffect(() => {
        let totalTemp = 0;
        for(let i = 0; i < items.length; i++){
            totalTemp += items[i].price * items[i].quantity
        }
        setTotal(totalTemp)
    },[items])

    const plusHandeler = (item) => {
        if(item.quantity < 10){
            dispatch(plusItem(item))
            // setTotalPrice(totalPrice += item.price)
        }else{
            alert('총 수량은 10개까지 가능합니다.')
        }
    }
    const minusHandeler = (item) => {
        if(item.quantity > 1){
            dispatch(minusItem(item))
        }else{
            dispatch(removeItem(item.id))
        }
        // setTotalPrice(totalPrice -= item.price)
    }

    return(
        <div>
            <h3>장바구니</h3>
            {items.length === 0 ? <p>장바구니가 비었습니다.</p> :(
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <img src={item.thumbnail} style={{width:'400px', height:'350px'}}/>
                            {item.title} X {item.quantity} - {(item.price * item.quantity).toLocaleString()}$
                            <button type="button" onClick={() => dispatch(removeItem(item.id))}>삭제</button>
                            <button type="button" onClick={() => plusHandeler(item)}>+</button>
                            <button type="button" onClick={() => minusHandeler(item)}>-</button>
                        </li>
                    ))}
                </ul>
            ) }
            {/* <h2>총계 : {Number(totalPrice.toFixed(2))}$</h2> */}
            <h2>총계 : {total}$</h2>
        </div>
    )
}
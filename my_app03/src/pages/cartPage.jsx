import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from "react";

export default function CartPage(){
    const product = useSelector((state) => state.cartList.cartLists)
    const dispatch = useDispatch()

    return(
        <>
            <h2>장바구니</h2>
            <ul>
                {product.map((item) => (
                    <li key={item.id}>
                        <img src={item.thumbnail} />
                        <spam>{item.title} X {item.quantity} - {item.price * item.quantity}</spam>
                        <button type="button">삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

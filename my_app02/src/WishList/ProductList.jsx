import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { wishListContext } from "./WishListContext";

export default function ProductList(){
    const { addToWishList } = useContext(wishListContext)

    const products = [
        {id: 1, name:'노트북', price:1500000},
        {id: 2, name:'마우스', price:30000},
        {id: 3, name:'키보드', price:80000},
    ]

    const [wishBtn, setWishBtn] = useState(false)
    const clickBtn = () => {
        setWishBtn((prev) => !prev)
    }


    return(
        <>
            <h2>🎁 상품 목록</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <p>
                            <span>{item.name} - {item.price.toLocaleString()}</span>
                            <button type="button" onClick={() => {addToWishList(item); clickBtn;}}> {wishBtn ? '🧡 찜하기' : '🤍 찜하기'}</button>
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
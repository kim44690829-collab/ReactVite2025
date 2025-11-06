import { useState } from "react"
import { Link } from "react-router-dom"
import ProductList from "./ProductList"

export default function Header(){
    const [listBtn, setListBtn] = useState(false)

    const listBtnHandeler = () => {
        setListBtn((prev) => !prev)
    }

    return(
        <>
            <h1> 🧡 찜하기 예제 </h1>
            <Link to={listBtn ? '/product' : '/wishlist'}>
                <button type="button" onClick={listBtnHandeler}>{listBtn ? '상품 보기' : '찜 목록 보기'}</button>
            </Link>
        </>
    )
}
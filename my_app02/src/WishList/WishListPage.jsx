import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { wishListContext } from "./WishListContext";

export default function WishListPage(){
    const { wishList, removeFromWishList } = useContext(wishListContext)
    return(
        <>
            <h2>🧡 찜한 상품 목록</h2>
            {wishList.length === 0 ? '현재 찜한 상품이 없습니다.' :
            <ul>
                {wishList.map((item, index) => (
                    <li key={item.id}>
                        <p>
                            <span>{item.name} - {item.price.toLocaleString()}</span>
                            <button type="button" onClick={() => removeFromWishList(index)} style={{color:'red'}}>삭제</button>
                        </p>
                    </li>
                ))}
            </ul>
            }
        </>
    )
}
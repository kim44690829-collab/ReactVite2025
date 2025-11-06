import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { wishListContext1 } from "../../WishListContext";
import '../Wishlist/wishlist.css'

export default function Wishlist(){
    const { wishList, wishListRemove, isWishList } = useContext(wishListContext1)
    return(
        <div className="wishList">
            <h2>찜 리스트</h2>
            {wishList.length === 0 ? <p className="list_p">목록이 비었습니다.</p> : (
            <ul>
                {wishList.map((item) => (
                    // <li key={item.id}>
                    //     <Link to={`/detail/${item.id}`}>
                    //         <img src={item.image} />
                    //         <p>{item.name}</p> 
                    //     </Link>
                    //     <p>{item.prepTimeMinutes}$</p>
                    //     <button type="button" onClick={() => wishListRemove(item.id)}>
                    //         {isWishList(item.id)? '🧡' : '🤍'}
                    //     </button>
                    // </li>
                    <li key={item.id}>
                        <div className="foodEach">
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </Link>
                            <p>가격 : {item.prepTimeMinutes}$</p>
                            <button type="button" className="wishBtn" 
                            onClick={() => wishListRemove(item.id)} style={{backgroundColor: isWishList(item.id)? '#ecb865' : 'tomato'}}>
                                {isWishList(item.id)? '🧡' : '🤍'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            )}
            
        </div>
    )
}
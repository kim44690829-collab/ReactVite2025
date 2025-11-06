import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { wishListContext1 } from "../../WishListContext";
import '../Meals/MealProductAll.css'

export default function MealProductAll({food}){
    const {isWishList, wishListAdd, wishListRemove} = useContext(wishListContext1);
    console.log(food)
    return(
        <>
            <div className="sec_1">
                <h1>전체 상품</h1>
                <ul>
                    {food.map((item) => (
                        <li key={item.id}>
                            <div className="foodEach">
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                </Link>
                                <p>가격 : {item.prepTimeMinutes}$</p>
                                <span>평점 : {item.rating}</span>
                                <span>리뷰 : {item.reviewCount}</span>
                                <button type="button" className="wishBtn" 
                                onClick={() => isWishList(item.id) ? wishListRemove(item.id) : wishListAdd(item)} style={{backgroundColor: isWishList(item.id)? '#ecb865' : 'tomato'}}>
                                    {isWishList(item.id)? '🧡' : '🤍'}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { wishListContext1 } from "../../WishListContext";
import '../Meals/MealProductAll.css'

export default function MealRating({food}){
    const {isWishList, wishListAdd, wishListRemove} = useContext(wishListContext1);

    const foodFilter = food.filter((item) => item.rating > 0)
    const foodCopy = [...foodFilter]
    const foodRating = foodCopy.sort((a,b) => b.rating - a.rating)

    return(
        <div className="sec_1">
            <h1>인기</h1>
            <ul>
                {foodRating.map((item) => (
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
    )
}
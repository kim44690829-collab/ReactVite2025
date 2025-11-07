import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { wishListContext1 } from "../../WishListContext";
import '../Meals/MealDetail.css'
import { useNavigate } from "react-router-dom";

export default function MealDetail({food}){
    const {isWishList, wishListAdd, wishListRemove} = useContext(wishListContext1);
    const {id} = useParams();
    const foodFind = food.find((item) => item.id === Number(id) )
    const navigate = useNavigate();

    const btnHandeler = () => {
        navigate(-1)
    }

    return(
        <>
            {foodFind !== null && foodFind !== undefined ?
            (
            <div className="sec_2">
                <h1>제품 상세</h1>
                <p>{foodFind.cuisine}</p>
                <div className="foodDetail">
                    <img src={foodFind.image} alt={foodFind.name} />
                    <p>{foodFind.name}</p>
                    <button type="button" className="wishBtn" 
                        onClick={() => isWishList(foodFind.id) ? wishListRemove(foodFind.id) : wishListAdd(foodFind)} 
                        style={{backgroundColor: isWishList(foodFind.id)? '#ecb865' : 'tomato', border:'none', outline:'none'}}>
                        {isWishList(foodFind.id)? '🧡' : '🤍'}
                    </button>
                </div>
                <p>가격 : {foodFind.prepTimeMinutes}$</p>
                <p>평점 : {foodFind.rating}</p>
                <p>리뷰 수 : {foodFind.reviewCount}</p>
                <button type='button' className="btn1" onClick={btnHandeler}>목록으로 돌아가기</button>
            </div>) : null
            }
        </>
    )
}
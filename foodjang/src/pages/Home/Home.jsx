import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { wishListContext1 } from "../../WishListContext";
import { Link } from "react-router-dom";

export default function Home({food}){
    const {isWishList, wishListAdd, wishListRemove} = useContext(wishListContext1);

    // 베스트
    const foodFilter = food.filter((item) => item.rating > 0)
    const foodCopy = [...foodFilter]
    const foodRating = foodCopy.sort((a,b) => b.rating - a.rating)

    // 리뷰
    const reviewFilter = food.filter((item) => item.reviewCount > 0)
    const reviewCopy = [...reviewFilter]
    const reviewSort = reviewCopy.sort((a,b) => b.reviewCount - a.reviewCount)

    // 가격
    const priceFilter1 = food.filter((item) => item.prepTimeMinutes > 0)
    const priceCopy1 = [...priceFilter1]
    const foodPriceHigh = priceCopy1.sort((a,b) => b.prepTimeMinutes - a.prepTimeMinutes)

    // 나라
    const [country, setCountry] = useState('Italian')
    const findFood = food.filter((item) => item.cuisine === country);

    return(
        <>
            <div className="sec_1">
                <Link to='/productall'>
                    <h1>전체 상품 ▶</h1>
                </Link>
                <ul>
                    {food.slice(0,5).map((item) => (
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
                <Link to='/bestproduct'>
                    <h1>베스트 ▶</h1>
                </Link>
                <ul>
                    {foodRating.slice(0,5).map((item) => (
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
                <Link to='/review'>
                    <h1>리뷰 ▶</h1>
                </Link>
                <ul>
                    {reviewSort.slice(0,5).map((item) => (
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
                <Link to='/price'>
                    <h1>가격 ▶</h1>
                </Link>
                <ul>
                    {foodPriceHigh.slice(0,5).map((item) => (
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
                <Link to='/country'>
                    <h1>나라 (현재 : Italian ) ▶</h1>
                </Link>
                <ul>
                    {findFood.slice(0,5).map((item) => (
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
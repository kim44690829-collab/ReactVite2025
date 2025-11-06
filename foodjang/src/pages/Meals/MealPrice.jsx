import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Meals/MealProductAll.css'
import { useState, useEffect, useContext } from "react";
import { wishListContext1 } from "../../WishListContext";

export default function MealPrice({food}){
    const {isWishList, wishListAdd, wishListRemove} = useContext(wishListContext1);
    const [price, setPrice] = useState(true)
    const [btnName, setBtnName] = useState('가격 낮은 순')

    const priceFilter1 = food.filter((item) => item.prepTimeMinutes > 0)
    const priceCopy1 = [...priceFilter1]
    const foodPriceHigh = priceCopy1.sort((a,b) => b.prepTimeMinutes - a.prepTimeMinutes)

    const priceFilter2 = food.filter((item) => item.prepTimeMinutes > 0)
    const priceCopy2 = [...priceFilter2]
    const foodPriceLow = priceCopy2.sort((a,b) => a.prepTimeMinutes - b.prepTimeMinutes)

    const priceHandler = () => {
        setBtnName(price ? '가격 높은 순' : '가격 낮은 순')
        setPrice(!price)
    }

    return(
        <div className="sec_1">
            <h1>가격</h1>
            <button type="button" className="priceBtn" onClick={priceHandler}
             style={{border:'none', outline:'none'}}>
                {btnName}
            </button>
            {price ? 
            <ul>
                {foodPriceHigh.map((item) => (
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
            :
            <ul>
                {foodPriceLow.map((item) => (
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
            }
            
        </div>
    )
}
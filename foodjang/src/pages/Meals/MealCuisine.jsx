import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Meals/MealProductAll.css'

export default function MealCuisine({food}){
    const [country, setCountry] = useState('Italian')

    const findFood = food.filter((item) => item.cuisine === country);

    const clickHandler = (num) => {
        if(num === 1){
            setCountry('Italian')
        }
        if(num === 2){
            setCountry('Asian')
        }
        if(num === 3){
            setCountry('American')
        }
        if(num === 4){
            setCountry('Mexican')
        }
        if(num === 5){
            setCountry('Mediterranean')
        }
        if(num === 6){
            setCountry('Pakistani')
        }
        if(num === 7){
            setCountry('Japanese')
        }
        if(num === 8){
            setCountry('Moroccan')
        }
        if(num === 9){
            setCountry('Korean')
        }
        if(num === 10){
            setCountry('Greek')
        }
        if(num === 11){
            setCountry('Thai')
        }
        if(num === 12){
            setCountry('Indian')
        }
        if(num === 13){
            setCountry('Turkish')
        }
        if(num === 14){
            setCountry('Smoothie')
        }
        if(num === 15){
            setCountry('Russian')
        }
        if(num === 16){
            setCountry('Lebanese')
        }
        if(num === 17){
            setCountry('Brazilian')
        }
    }

    return(
        <>
            <div className="btnAll">
                <button type="button" className="btn" onClick={() => clickHandler(1)}>Italian</button>
                <button type="button" className="btn" onClick={() => clickHandler(2)}>Asian</button>
                <button type="button" className="btn" onClick={() => clickHandler(3)}>American</button>
                <button type="button" className="btn" onClick={() => clickHandler(4)}>Mexican</button>
                <button type="button" className="btn" onClick={() => clickHandler(5)}>Mediterranean</button>
                <button type="button" className="btn" onClick={() => clickHandler(6)}>Pakistani</button>
                <button type="button" className="btn" onClick={() => clickHandler(7)}>Japanese</button>
                <button type="button" className="btn" onClick={() => clickHandler(8)}>Moroccan</button>
                <button type="button" className="btn" onClick={() => clickHandler(9)}>Korean</button>
                <button type="button" className="btn" onClick={() => clickHandler(10)}>Greek</button>
                <button type="button" className="btn" onClick={() => clickHandler(11)}>Thai</button>
                <button type="button" className="btn" onClick={() => clickHandler(12)}>Indian</button>
                <button type="button" className="btn" onClick={() => clickHandler(13)}>Turkish</button>
                <button type="button" className="btn" onClick={() => clickHandler(14)}>Smoothie</button>
                <button type="button" className="btn" onClick={() => clickHandler(15)}>Russian</button>
                <button type="button" className="btn" onClick={() => clickHandler(16)}>Lebanese</button>
                <button type="button" className="btn" onClick={() => clickHandler(17)}>Brazilian</button>
            </div>
            <div className="sec_1">
                <ul>
                    {findFood.map((item) => (
                        <li key={item.id}>
                            <div className="foodEach">
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                </Link>
                                <p>가격 : {item.prepTimeMinutes}$</p>
                                <span>평점 : {item.rating}</span>
                                <span>리뷰 : {item.reviewCount}</span>
                            </div>
                        </li>
                    ))}
                </ul> 
            </div>
        </>
    )
}
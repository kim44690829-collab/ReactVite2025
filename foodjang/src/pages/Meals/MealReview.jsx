import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Meals/MealProductAll.css'

export default function MealReview({food}){

    const reviewFilter = food.filter((item) => item.reviewCount > 0)
    const reviewCopy = [...reviewFilter]
    const reviewSort = reviewCopy.sort((a,b) => b.reviewCount - a.reviewCount)

    return(
        <div className="sec_1">
            <h1>리뷰 많은 순</h1>
            <ul>
                {reviewSort.map((item) => (
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
    )
}
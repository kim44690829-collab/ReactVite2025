import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Meals/MealDetail.css'

export default function MealDetail({food}){
    const {id} = useParams();
    const foodFind = food.find((item) => item.id === Number(id) )

    return(
        <>
            {foodFind !== null && foodFind !== undefined ?
            (
            <div className="sec_2">
                <h1>제품 상세</h1>
                <p>{foodFind.cuisine}</p>
                <img src={foodFind.image} alt={foodFind.name} />
                <p>{foodFind.name}</p>
                <p>가격 : {foodFind.prepTimeMinutes}$</p>
                <p>평점 : {foodFind.rating}</p>
                <p>리뷰 수 : {foodFind.reviewCount}</p>
                <Link to='/' className="btn1">목록으로 돌아가기</Link>
            </div>) : null
            }
        </>
    )
}
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Recipes/Recipe.css'

export default function RecipeDetail({recipe}){
    const {id} = useParams()
    // console.log('이거', recipe)
    const recipeFind = recipe.find((item) => item.id === Number(id))
    

    return(
        <>
            {recipeFind !== null && recipeFind !== undefined ? (
            <div className="foodInfo">
                <h1>레시피 상세</h1>
                <h2>{recipeFind.name}</h2>
                <img src={recipeFind.image} alt={recipeFind.name} />
                <p>요리 유형 : {recipeFind.cuisine}</p>
                <p>난이도 : {recipeFind.difficulty}</p>
                <p>서빙 수 : {recipeFind.servings}</p>
                <p>칼로리 : {recipeFind.caloriesPerServing}</p>
                <p>평점 : {recipeFind.rating}</p>
                <h2>조리 방법</h2>
                <ol className="instructions">
                    {recipeFind.instructions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
                <Link to = '/' className="linkBtn">목록으로 돌아가기</Link>
            </div>):null
            }
        </>
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";
import '../Recipes/Recipe.css'

export default function RecipeList({recipe}){
    const [recipes, setRecipes] = useState(true)
    const [rate, setRate] = useState(true)
    const [recipeCuisine, setRecipeCuisine] = useState('Italian')
    const [like, setLike] = useState(0);

    const recipeFilter = recipe.filter((item) => item.cuisine === recipeCuisine)

    const likeBtn = () => {
        setLike(like + 1)
    }

    const clickHandler = (num) => {
        if(num === 1){
            setRecipeCuisine('Italian')
        }else if(num === 2){
            setRecipeCuisine('Asian')
        }else if(num === 3){
            setRecipeCuisine('American')
        }else if(num === 4){
            setRecipeCuisine('Mexican')
        }else if(num === 5){
            setRecipeCuisine('Mediterranean')
        }else if(num === 6){
            setRecipeCuisine('Pakistani')
        }else if(num === 7){
            setRecipeCuisine('Japanese')
        }else if(num === 8){
            setRecipeCuisine('Moroccan')
        }else if(num === 9){
            setRecipeCuisine('Korean')
        }else if(num === 10){
            setRecipeCuisine('Greek')
        }else if(num === 11){
            setRecipeCuisine('Thai')
        }else if(num === 12){
            setRecipeCuisine('Indian')
        }else if(num === 13){
            setRecipeCuisine('Turkish')
        }else if(num === 14){
            setRecipeCuisine('Smoothie')
        }else if(num === 15){
            setRecipeCuisine('Russian')
        }else if(num === 16){
            setRecipeCuisine('Lebanese')
        }else{
            setRecipeCuisine('Brazilian')
        }
        setRecipes(false)
    }

    const rateFilter = recipe.filter((item) => item.rating > 0)
    const recipeCopy = [...rateFilter];
    const recipeRate = recipeCopy.sort((a,b) => b.rating - a.rating)

    return(
        <div className="container">
            <h1>레시피 목록</h1>
            <div className="btn">
                <button type="button" onClick={() => {setRecipes(true); setRate(true)}}>All</button>
                <button type="button" onClick={() => clickHandler(1)}>Italian</button>
                <button type="button" onClick={() => clickHandler(2)}>Asian</button>
                <button type="button" onClick={() => clickHandler(3)}>American</button>
                <button type="button" onClick={() => clickHandler(4)}>Mexican</button>
                <button type="button" onClick={() => clickHandler(5)}>Mediterranean</button>
                <button type="button" onClick={() => clickHandler(6)}>Pakistani</button>
                <button type="button" onClick={() => clickHandler(7)}>Japanese</button>
                <button type="button" onClick={() => clickHandler(8)}>Moroccan</button>
                <button type="button" onClick={() => clickHandler(9)}>Korean</button>
                <button type="button" onClick={() => clickHandler(10)}>Greek</button>
                <button type="button" onClick={() => clickHandler(11)}>Thai</button>
                <button type="button" onClick={() => clickHandler(12)}>Indian</button>
                <button type="button" onClick={() => clickHandler(13)}>Turkish</button>
                <button type="button" onClick={() => clickHandler(14)}>Smoothie</button>
                <button type="button" onClick={() => clickHandler(15)}>Russian</button>
                <button type="button" onClick={() => clickHandler(16)}>Lebanese</button>
                <button type="button" onClick={() => clickHandler(17)}>Brazilian</button>
                <button type="button" onClick={() => {setRecipes(true); setRate(false)}}>Rating 순</button>
            </div>

            <ul className="foodList">
                {(recipes ? (rate ? recipe : recipeRate) : recipeFilter).map((item) => (
                    <li key={item.id}>
                        <div className="foodEach">
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </Link>
                                <p>요리 유형 : {item.cuisine}</p>
                                <p>평점 : {item.rating}</p>
                                <button type="button" 
                                style={{border:'none', outline:'none'}}
                                onClick={() => likeBtn()}
                                >
                                    ❤ 좋아요 {like}
                                </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
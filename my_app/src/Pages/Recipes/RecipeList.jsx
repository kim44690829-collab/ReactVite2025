import { useState } from "react";
import { Link } from "react-router-dom";
import '../Recipes/Recipe.css'

export default function RecipeList({recipe}){
    const [recipes, setRecipes] = useState(true)
    const [rate, setRate] = useState(true)
    const [recipeCuisine, setRecipeCuisine] = useState('Italian')
    

    const recipeFilter = recipe.filter((item) => item.cuisine === recipeCuisine)

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

    // 좋아요 출력할 방향
    // like = {1:0,2:0.3:0....}
    // id 음식명  좋아요
    // 1  된장찌개  0
    // 2  김치찌개  0
    // 3  피자      0
    // json 자체 데이터가 오브젝트이기때문에 useState(0)으로 주면 안됨 -> 하나의 항목만 좋아요가 0이 되기때문에
    // like 상태변수
    
    // 오브젝트에 0을 초기화하는 초기값 변수
    const defaultLike = {} // 빈 배열 또는 빈 오브젝트 => undefined 될 가능성이 높음

    if(recipe.length > 0 ){
        for(let i = 0; i < recipe.length; i++){
            const recip = recipe[i]
            // defaultLike[1] = 0 
            // {id: 1 , 좋아요 : 0}
            defaultLike[recip.id] = 0; // 각 레시피 id별로 초기값 0으로 셋팅
        }
    }
    
    // 좋아요 버튼 클릭시 좋아요 1씩 증가하는 핸들러
    const likeBtn = (id) => {
        // 배열이나 오브젝트는 힙의 어드레스 번지 주소가 같으면 리 랜더링을 하지 않음. -> 얕은복사
        const likeCopy = {...like}
        // 현재 undefined인 상태기때문에 undefined+1 을 한 것이되어 NaN이 나옴

        likeCopy[id] = (likeCopy[id] !== undefined ? likeCopy[id] : 0) + 1
        setLike(likeCopy)
    }

    const [like, setLike] = useState(defaultLike);

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
                                onClick={() => likeBtn(item.id)}
                                >
                                    ❤ 좋아요 {like[item.id]}
                                </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
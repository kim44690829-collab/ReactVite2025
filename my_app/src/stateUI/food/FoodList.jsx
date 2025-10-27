export default function FoodList(props){
    return(
        <>
            <ul>
                {props.foods.map((food) => (
                    <li className="li1" key={food.id} style={{marginBottom:'10px'}}>
                        {food.name} : {food.price.toLocaleString()} 
                        <button type="button" className="btn2" onClick={() => props.addFood(food)}>담기</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
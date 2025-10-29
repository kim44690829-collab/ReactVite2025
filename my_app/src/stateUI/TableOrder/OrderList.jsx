export default function OrderList(props){
    return(
        <div className="foodAll">
            {props.food.map((food) => (
                <div key={food.id} className="food">
                    <img src={`/tableImg/${food.img}`} alt={food.name} />
                    <p>{food.name}</p>
                    <p>{food.price.toLocaleString()}</p>
                    <button type="button" className="cartBtn" onClick={() => props.addList(food)}>담기🛒</button>
                </div>
            ))}
        </div>
    )
}
export default function CartModal(props){
    return(
        <>
            <div style={{
                position:'fixed', top:0, left:0,
                width:'100%', height:'100%',
                backgroundColor:'rgba(0,0,0,0.3)',
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <div className="modal" style={{backgroundColor:'white', padding:'10px', borderRadius:'10px', width:'500px'}}>
                    <h2>장바구니</h2>
                    {props.cart.length === 0 ? <p>비어있습니다.</p> : 
                        <ul>
                            {props.cart.map((item, index) => (
                                <li className="li2" key={item.id}>
                                    <span>{item.name}</span> 
                                    <button type="button" className="btn3" onClick={() => props.minusBtn(index)}>-</button>
                                    {item.quantity}
                                    <button type="button" className="btn3" onClick={() => props.plusBtn(index)}>+</button>
                                    <button type="button" className="btn3" onClick={() => props.delBtn(index)}>X</button>
                                </li>
                            ))}
                        </ul>
                    }
                    <button type="button" style={{backgroundColor:'orangered', color:'white', padding:'10px'}} onClick={props.onClose}>닫기</button>
                </div>
            </div>
        </>
    )
}
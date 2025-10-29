export default function OrderModal(props){
    return(
        <>
            <div className="overlay">
                <div className="modal">
                    <div className="modal_top">
                        <span>장바구니</span>
                        <button type="button" onClick={props.onClose1}>X</button>
                    </div>
                    {props.cart.length === 0 ? <p>장바구니가 비어있습니다.</p> : 
                        <div className="cartList">
                            {props.cart.map((item) => (
                                <div key={item.id} className="foodEach">
                                    <div className="foodName">
                                        <span>{item.name}</span>
                                        <button type="button" onClick={() => props.delBtn(item)}>X</button>
                                    </div>
                                    <div className="foodInfo">
                                        <div className="foodQuantity">
                                            <button type="button" onClick={() => props.minusBtn(item)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button type="button" onClick={() => props.plusBtn(item)}>+</button>
                                        </div>
                                        <div className="foodPrice">
                                            <span className="bold">{(item.price * item.quantity).toLocaleString()}</span><span>원</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    <div className="totalPrice">
                        <p>총 가격</p>
                        <span>{props.total}원</span>
                    </div>
                    <div className="order">
                        <button type="button" className="complete" onClick={props.onClose2}>주문 완료</button>
                    </div>
                </div>
            </div>
        </>
    )
}
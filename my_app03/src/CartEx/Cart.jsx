import {useDispatch, useSelector} from 'react-redux'
import {cartAdd, cartDel} from './CartSlice'


export default function Cart(){
    const sampleProducts = [
        {id:1, name:'사과', price:1000},
        {id:2, name:'바나나', price:1500},
        {id:3, name:'오렌지', price:1200},
    ]

    const cartList = useSelector((state) => state.cart.product)
    const dispatch = useDispatch();
    
    return(
        <>
            <h1>장바구니</h1>
            <h2>상품 목록</h2>
            <ul>
                {sampleProducts.map((item, index) => (
                    <li key={item.id}>
                        <span>{item.name} - {item.price}원</span>
                        <button type='button' onClick={() => dispatch(cartAdd(item))}>장바구니 추가</button>
                    </li>
                ))}
            </ul>
            <h2>장바구니</h2>
            <ul>
                {cartList.map((product, index) => (
                    <li key={product.id}>
                        <span>{product.name} - {product.price}원</span>
                        <button type='button' onClick={() => dispatch(cartDel(product))}>삭제</button>
                    </li>
                ))}
            </ul>
            <button type='button'>장바구니 비우기</button>
        </>
    )
}
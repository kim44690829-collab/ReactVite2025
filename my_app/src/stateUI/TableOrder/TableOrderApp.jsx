import { useState } from "react";
import '../TableOrder/TableOrder.css'
import '../TableOrder/reset.css';
import OrderList from '../TableOrder/OrderList';
import OrderModal from '../TableOrder/OrderModal';
import { useEffect } from "react";

export default function TableOrderApp(){
    // 주문 목록 전체
    const tableProduct = [

        {id:1, name: '새치고기고기', img:'square_1.jpg', price:7500, category:1},
        {id:2, name: '돈까스도련님 고기고기', img:'square_2.jpg', price:7000, category:1},
        {id:3, name: '돈치 고기고기', img:'square_3.jpg', price:6500, category:1},
        {id:4, name: '돈까스도련님', img:'square_8.jpg', price:5000, category:1},
        {id:5, name: '제육 돈까스도련님', img:'square_9.jpg', price:5000, category:1},
        {id:6, name: '왕치킨마요', img:'circle_2.jpg', price:5500, category:1},
        {id:7, name: '빅치킨마요', img:'circle_3.jpg', price:4500, category:1},
        {id:8, name: '스팸마요', img:'circle_6.jpg', price:4300, category:1},
        {id:9, name: '참치마요', img:'circle_7.jpg', price:3700, category:1},
        {id:10, name: '돈까스 카레', img:'circle_8.jpg', price:4900, category:1},

        {id:11, name: '새치고기고기', img:'square_1.jpg', price:7500, category:2},
        {id:12, name: '돈까스도련님 고기고기', img:'square_2.jpg', price:7000, category:2},
        {id:13, name: '돈치 고기고기', img:'square_3.jpg', price:6500, category:2},
        {id:14, name: '동백', img:'square_4.jpg', price:6500, category:2},
        {id:15, name: '소불고기', img:'square_5.jpg', price:6000, category:2},
        {id:16, name: '돈치스팸', img:'square_6.jpg', price:5300, category:2},
        {id:17, name: '칠리 찹쌀탕수육도련님', img:'square_7.jpg', price:4800, category:2},
        {id:18, name: '돈까스도련님', img:'square_8.jpg', price:5000, category:2},
        {id:19, name: '제육 돈까스도련님', img:'square_9.jpg', price:5000, category:2},
        {id:20, name: '제육볶음', img:'square_10.jpg', price:5000, category:2},
        {id:21, name: '송정식 떡갈비', img:'square_11.jpg', price:7000, category:2},
        {id:22, name: '치킨제육', img:'square_12.jpg', price:5300, category:2},

        {id:23, name: '메가치킨마요', img:'circle_1.jpg', price:6500, category:3},
        {id:24, name: '왕치킨마요', img:'circle_2.jpg', price:5500, category:3},
        {id:25, name: '빅치킨마요', img:'circle_3.jpg', price:4500, category:3},
        {id:26, name: '치킨마요', img:'circle_4.jpg', price:3900, category:3},
        {id:27, name: '메가스팸마요', img:'circle_5.jpg', price:6200, category:3},
        {id:28, name: '스팸마요', img:'circle_6.jpg', price:4300, category:3},
        {id:29, name: '참치마요', img:'circle_7.jpg', price:3700, category:3},
        {id:30, name: '돈까스 카레', img:'circle_8.jpg', price:4900, category:3},
        {id:31, name: '소불고기 철판볶음밥', img:'circle_9.jpg', price:5200, category:3},
        {id:32, name: '스팸 철판볶음밥', img:'circle_10.jpg', price:5000, category:3},
        {id:33, name: '스팸 김치볶음밥', img:'circle_11.jpg', price:5000, category:3},
        {id:34, name: '김치볶음밥', img:'circle_12.jpg', price:4200, category:3},

        {id:35, name: '해시 포테이토 스틱', img:'snak_1.jpg', price:2000, category:4},
        {id:36, name: '치즈버터 해시 포테이토 스틱', img:'snak_2.jpg', price:2200, category:4},
        {id:37, name: '허니버터 해시 포테이토 스틱', img:'snak_3.jpg', price:2200, category:4},
        {id:38, name: '뉴 감자고로케', img:'snak_4.jpg', price:2700, category:4},
        {id:39, name: '미니 찹쌀핫도그', img:'snak_5.jpg', price:2800, category:4},
        {id:40, name: '미니 찹쌀 탕수육', img:'snak_6.jpg', price:2300, category:4},
        {id:41, name: ' 케이준후라이', img:'snak_7.jpg', price:1900, category:4},
        {id:42, name: '코카콜라 (제로)', img:'snak_8.jpg', price:1500, category:4},
        {id:43, name: '사이다(제로)', img:'snak_9.jpg', price:1500, category:4},
        {id:44, name: '환타(오렌지)', img:'snak_10.jpg', price:1500, category:4},
        {id:45, name: '웰치스 제로(포도)', img:'snak_11.jpg', price:1200, category:4},
        {id:46, name: '피크닉(사과)', img:'snak_12.jpg', price:1000, category:4},
    ]
    
    // 장바구니에 넣을 배열
    const [cart, setCart] = useState([]);

    // 모달을 열고 닫을 state
    const [modalOpen, setModalOpen] = useState(false);

    // 현재 선택한 카테고리 번호 state
    const [selectCate,setSelectCate] = useState(1);

    const [totalPrice, setTotalPrice] = useState(0);

    // 로직 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    // filter를 이용한 카테고리 변경
    const food = tableProduct.filter((item) => item.category === selectCate)

    // 담기 버튼 클릭시 장바구니에 담기
    const addList = (tableProduct) => {
        const cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === tableProduct.id)
        if(index !== -1){
            cartCopy[index].quantity += 1;
            // setTotal(total + cartCopy[index].price)
        }else{
            cartCopy.push({id:tableProduct.id, name:tableProduct.name, price:tableProduct.price, quantity:1})
            // setTotal(total + cartCopy.price)
        }
        setCart(cartCopy);
        // priceTotal();
    }
    // +버튼 클릭시 1 증가 (10제한)
    const plusBtn = (tableProduct) => {
        const cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === tableProduct.id)
        if(cartCopy[index].quantity < 10){
            console.log(cartCopy[index].quantity)
            cartCopy[index].quantity += 1;
            // setTotal(total + cartCopy[index].price)
        }
        setCart(cartCopy);
        // priceTotal();
    }
    // -버튼 클릭시 1감소 (1제한)
    const minusBtn = (tableProduct) => {
        const cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === tableProduct.id)
        if(cartCopy[index].quantity > 1){
            cartCopy[index].quantity -= 1;
            // setTotal(total - cartCopy[index].price)
        }
        setCart(cartCopy);
        // priceTotal();
    }
    // x버튼 클릭시 제품 삭제
    const delBtn = (tableProduct) => {
        const cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === tableProduct.id)
        console.log('index', index)
        cartCopy.splice(index,1)
        setCart(cartCopy);
        // setTotal(total - cartCopy[index].price)
        // priceTotal();
    }
    // 총 가격
    useEffect(() => {
        let total = 0;
        for(let i = 0; i < cart.length; i++){
            total += cart[i].price * cart[i].quantity
        }
        setTotalPrice(total)
    },[cart])
    // const cartCopy = [...cart]
    // setCart(cartCopy)
    // const priceTotal = () => {
    //     let total = 0
    //     const cartCopy = [...cart]
    //     for(let i = 0; i < cartCopy.length; i++){
    //         total += cartCopy[i].price * cartCopy[i].quantity
    //         setTotal(total)
    //     }
    // }
    // const priceTotalMinus = () => {
    //     const cartCopy = [...cart]
    //     for(let i = 0; i < cartCopy.length; i++){
    //         setTotal(total - cartCopy[i].price)
    //     }
    // }

    const onClose2 = () => {
        const cartCopy = [...cart]
        cartCopy.length === 0? alert('주문 내역이 없습니다.') : setModalOpen(false);
        setCart([]);
        setTotal(0);
    }
    


    return(
        <div className="order_container">
            <div className="menuList">
                <span>1</span>
                <button type="button" 
                onClick={() => setSelectCate(1)} 
                style={{
                    backgroundColor:selectCate === 1? '#F1DEC9' : '#8D7B68', 
                    color:selectCate === 1? '#504233' : '#F1DEC9',
                    outline:'none', border:'none'
                    }}>
                    베스트10
                </button>
                <button type="button" 
                onClick={() => setSelectCate(2)} 
                style={{
                    backgroundColor:selectCate === 2? '#F1DEC9' : '#8D7B68', 
                    color:selectCate === 2? '#504233' : '#F1DEC9',
                    outline:'none', border:'none'
                    }}>
                    사각도시락
                </button>
                <button type="button" 
                onClick={() => setSelectCate(3)} 
                style={{
                    backgroundColor:selectCate === 3? '#F1DEC9' : '#8D7B68', 
                    color:selectCate === 3? '#504233' : '#F1DEC9',
                    outline:'none', border:'none'
                    }}>
                    보울도시락
                </button>
                <button type="button" 
                onClick={() => setSelectCate(4)} 
                style={{
                    backgroundColor:selectCate === 4? '#F1DEC9' : '#8D7B68', 
                    color:selectCate === 4? '#504233' : '#F1DEC9',
                    outline:'none', border:'none'
                    }}>
                    스낵/음료
                </button>
                <button type="button" className="list" 
                onClick={() => setModalOpen(true)}
                style={{
                    backgroundColor:modalOpen ? '#F1DEC9' : '#8D7B68', 
                    color: modalOpen ? '#504233' : '#F1DEC9',
                    outline:'none', border:'none'
                }}
                >
                    주문 내역
                </button>
            </div>
            <div className="section_order">
                <OrderList food = {food} addList = {addList}/>
            </div>
            {modalOpen && 
            <OrderModal 
            cart = {cart} 
            plusBtn = {plusBtn} 
            minusBtn = {minusBtn} 
            delBtn = {delBtn} 
            // priceTotal = {priceTotal}
            onClose1 = {() => setModalOpen(false)}
            onClose2 = {onClose2}
            totalPrice = {totalPrice}
            /> 
            }
        </div>
    )
}
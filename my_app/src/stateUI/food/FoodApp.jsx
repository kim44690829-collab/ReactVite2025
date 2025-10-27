import { useState } from "react";
import FoodList from "../food/FoodList";
import CartModal from "../food/CartModal";
import'../food/FoodApp.css';

export default function FoodApp(){
    const [foods] = useState([
        {id:1, name: "피자", price:20000},
        {id:2, name: "햄버거", price:11000},
        {id:3, name: "치킨", price:23000},
    ])
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addFood = (food) => {
        let cartCopy = [...cart];
        let index = cart.findIndex((item) => item.id === food.id)
        if(index !== -1){
            cartCopy[index].quantity += 1;
        }else{
            cartCopy.push({id:food.id, name:food.name, price:food.price, quantity:1})
        }
        setCart(cartCopy);
    }

    const minusBtn = (food) => {
        let cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === food.id)
        if(cartCopy[index].quantity > 1){
            cartCopy[index].quantity -= 1;
        }
        setCart(cartCopy);
    }

    const plusBtn = (food) => {
        let cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === food.id)
        if(cartCopy[index].quantity < 10){
            cartCopy[index].quantity += 1;
        }
        setCart(cartCopy);
    }

    const delBtn = (food) => {
        let cartCopy = [...cart]
        let index = cart.findIndex((item) => item.id === food.id)
        cartCopy.splice(index,1)
        setCart(cartCopy);
    }

    return(
        <div className="container">
            <h2>🍕🍔🍗음식주문🍗🍔🍕</h2>
            <button type="button" className="btn1" onClick={() => setIsCartOpen(true)}>장바구니</button>
            <FoodList foods = {foods} addFood = {addFood} />
            {isCartOpen && <CartModal cart = {cart} onClose = {() => setIsCartOpen(false)} minusBtn = {minusBtn} plusBtn = {plusBtn} delBtn = {delBtn} />} 
        </div>
    )
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCartList } from "../store02/cartSlice";
import { setProduct } from "../store02/productSlice";

export default function Section(){
    // const [cartList, setCartList] = useState([])
    const [product,setProduct] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const load = async() => {
            try{
                const res = await axios.get('https://dummyjson.com/products')
                // console.log(res.data.products)
                dispatch(setProduct(res.data.products))
            }catch(err){
                console.log('에러', err)
            }finally{
                console.log('요청 완료')
            }
        }
        load()
    },[])
    
    return(
        <>
            <h2 style={{marginBottom:'300px'}}>상품 목록</h2>
            <ul style={{display:'flex', flexWrap:'wrap', listStyle:'none', width:'2100px',height:'500px', margin:'0', padding:'0'}}>
                {product.slice(0,20).map((item, index) => (
                    <li key={item.id}>
                        <button type="button" onClick={() => dispatch(addCartList(index))}>
                            <img src={item.thumbnail} alt={item.title} style={{width:'200px', height:'150px'}}/>
                            <p style={{width:'200px', whiteSpace:'wrap' }}>{item.title}</p>
                            <p>{item.price}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
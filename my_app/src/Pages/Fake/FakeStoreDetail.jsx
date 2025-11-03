import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FakeStoreDetail({data}){
    // const {id, title, price, description, category, image, rating} = useParams()
    const {id} = useParams()
    // 현재 useParams()받아온 id가 props로 받은 data에 같은 id가 존재하는지 찾아야한다.
    const product = data.find((item) => item.id === Number(id))
    // const [product, setProduct] = useState(null)

    // React에서의 코드 표현 방식
    if(!product) return <p></p>

    return(
        <>
            {/* {product !== null && product !== undefined ? ( */}
            {product &&
            <div>
                <h2>상품 상세 보기</h2>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p>카테고리 : {product.cartegory}</p>
                <p>가격 : ${product.price}</p>
                <p>평점 : {product.rating.rate}</p>
                <p>{product.description}</p>
                <Link to='/'>상품 목록으로 이동</Link>
            </div>
            // ) : null
            }
        </>
    )
}
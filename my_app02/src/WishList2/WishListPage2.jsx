import { useContext } from "react";
import { wishlistContext } from "./WishListContext2";
import { Link } from "react-router-dom";

// 찜한 목록 출력
export default function WishListPage2(){
    const {wishlist, removeFromWishlist, itemClear} = useContext(wishlistContext)

    return(
        <div style={{padding:'20px'}}>
            <h2>찜한 상품 목록</h2>
            {/* 찜한 상품이 없음 : 찜한 상품이 없습니다- 메시지 */}
            <button type="button" onClick={itemClear}>전체 삭제</button>
            {wishlist.length === 0 ?
                <p>찜한 상품이 없습니다.</p> : (
                    <ul>
                        {wishlist.map((item) => (
                            <li key={item.id} style={{marginBottom:'10px'}}>
                                {item.name} - {item.price.toLocaleString()}
                                <button type="button" onClick={() => removeFromWishlist(item.id)} style={{color:'red'}}>삭제</button>
                            </li>
                        ))}
                    </ul>
                )    
        }
        </div>
    )
}
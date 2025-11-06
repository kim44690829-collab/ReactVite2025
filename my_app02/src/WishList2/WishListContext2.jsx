// createContext => 공유데이터를 저장하는 저장소를 생성하는 함수 -> 반드시 import
import { createContext } from "react";
// 상태 변수
import { useState } from "react";

// context 생성 : wishlistContext
// Context 생성한 후 내보내야 함 -> 반드시 export
// 생성자 함수
export const wishlistContext = createContext();

// Provider(공급자) : 데이터를 공급하는 컴포넌트
export default function WishlistProvider({children}){
    // 찜한 항목을 저장하는 상태변수 정의
    // 초기값 = 빈배열
    const  [wishlist, setWishlist] = useState([])

    // 찜한 상품을 추가하는 함수 생성
    const addToWishlist = (product) => {
        // 중복을 피하기 위해 같은 id가 존재하는지 유무를 배열.find()
        // find() => 찾는 항목이 존재 : 오브젝트 배열
        //           찾는 항목이 없음 : undefined
        const listFind = wishlist.find((item) => item.id === product.id)
        // listFind에 같은 id가 존재 => 추가되면 안됨.
        if(listFind === undefined){
            // 찜 항목에 추가
            const listCopy = [...wishlist]
            listCopy.push(product) // 내가 선택한 항목전체가 push
            setWishlist(listCopy)
        }
    }
    // 찜 해제
    // filter() 함수 이용해서 id가 다른 항목만 남겨서 업데이트
    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id))
    }

    // isInWishlist : 이미 찜된 항목인지 확인이 필요함 (filter로 ui에서만 업데이트 시켰기때문에 실제 삭제된게 아니여서)
    // 해당 id의 상품객체가 존재하면 true, 없으면 false반환
    // find()함수 이용
    const isInWishlist = (id) => {
        // wishlist 배열에서 id가 일치하는 상품을 찾는다
        const findItem = wishlist.find((item) => item.id === id)
        // 찾는 상품이 존재하면 findItem(객체) , 없으면 undefined
        if(findItem !== undefined){ // id 존재
            // 상품이 이미 찜목록에 있으면 true 반환
            return true;
        }else{
            // 상품이 없음 : false반환
            return false;
        }
    }

    // Provider 생성
    return(
        <wishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist, isInWishlist}}>
            {/* children : wishlistContext의 하위 컴포넌트 전부 */}
            {children}
        </wishlistContext.Provider>
    )
}
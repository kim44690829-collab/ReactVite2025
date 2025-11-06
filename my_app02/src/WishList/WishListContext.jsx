import { useState, createContext } from "react";

export const wishListContext = createContext();

export default function WishProvider({children}){
    // 현재 찜 목록을 담을 상태변수 배열
    const [wishList, setWishList] = useState([])

    // 찜 목록에 추가하기 위한 함수
    const addToWishList = (item) => {
        const listCopy = [...wishList]
        listCopy.push(item)
        setWishList(listCopy)
    }

    // 찜 목록에서 제거하기 위한 함수
    const removeFromWishList = (id) => {
        
    }

    // 이미 찜이 된 항목인지 확인하는 함수
    const isInWishList = (id) => {
        
    }

    return(
        <wishListContext.Provider value={{wishList, addToWishList, removeFromWishList, isInWishList}}>
            {children}
        </wishListContext.Provider>
    )
}
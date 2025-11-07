import { useState, useEffect, createContext } from "react";

export const wishListContext1 = createContext();

export default function WishListProvider({children}){
    // 찜목록을 담을 상태변수
    const [wishList, setWishList] = useState(() => {
        const saved = localStorage.getItem('wishList')
        return saved ? JSON.parse(saved) : [];
    })

    // const [wishList, setWishList] = useState([])

    // useEffect(() => {
    //     const saved = localStorage.getItem('wishList')

    //     if(saved){
    //         setWishList(JSON.parse(saved))
    //     }
    // },[])

    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList))
    },[wishList])
    

    // 찜버튼을 누르면 목록에 추가되는 함수
    const wishListAdd = (product) => {
        const listFind = wishList.find((item) => item.id === product.id)
        if(listFind === undefined){
            const wishListCopy = [...wishList]
            wishListCopy.push(product)
            setWishList(wishListCopy)
        }   
    }

    // 삭제버튼을 누르면 목록에서 삭제되는 함수
    const wishListRemove = (id) => {
        setWishList(wishList.filter((item) => item.id !== id))
    }

    const isWishList = (id) => {
        const findList = wishList.find((item) => item.id === id)
        if(findList !== undefined){
            return true;
        }else{
            return false;
        }
    }

    const allDel = () => {
        setWishList([])
        localStorage.removeItem('wishList')
    }

    return(
        <wishListContext1.Provider value={{wishList, wishListAdd, wishListRemove, isWishList, allDel}}>
            {children}
        </wishListContext1.Provider>
    )
}
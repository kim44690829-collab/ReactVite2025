import { useEffect, useState } from "react";

export default function ChildEx06(props){
    
    useEffect(() => {
        console.log('컴포넌트 마운트')

        return(() => {console.log('컴포넌트 언마운트')})
    },[props.toggle])

    return(
        <>
            <p>안녕하세요! 저는 토글 가능한 컴포넌트 입니다!</p>
        </>
    )
}
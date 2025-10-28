import { useState } from "react";

export default function ChangeImg03(){
    const imgs = [
        '/images/coffee-gray.jpg',
        '/images/coffee-blue.jpg',
        '/images/coffee-pink.jpg',
    ];
    const [index,setIndex] = useState(0)

    // 인덱스 번호가 2가되면 다시 0으로 순환하는 함수
    const ChIndex = () => {
        // if(index < imgs.length -1){
        //     setIndex(index+1)
        // }else{
        //     setIndex(0)
        // }
        setIndex( (index+1) % imgs.length )
    }

    return(
        <>
            <div>
                {/* <img src={imgs[index]} alt="coffee" onClick={() => setIndex(index === 0 ? 1 : index === 1 ? 2 : 0)} /> */}
                <img src={imgs} alt="coffee" onClick={ChIndex} />
            </div>
        </>
    )
}
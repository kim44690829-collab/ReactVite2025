import { useState } from "react"

export default function Test(){
    const [item, setItem] = useState([])

    const addItem = () => {
        // console의 item 배열에 값이 추가되어도 react입장에서는 item의 주소가 바뀌지 않았다고 판단하여 화면을 업데이트하지 않는다. -> 리랜더링 x -> 화면 출력x
        // item.push(`아이템 ${item.length + 1}`)
        console.log(`아이템 : ${item}`)
        setItem([...item, `아이템 ${item.length + 1}`])
    }
    return(
        <>
            <button onClick={addItem} >추가</button>
            {/* <button onClick={() => {setItem([...item, `아이템 ${item.length + 1}`])}} >추가</button> */}
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
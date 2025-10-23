import { useState } from "react";

export default function ShoppingList(){
    const [item, setItem] = useState([
        {id:0, name: '우유', done:false, current:'구매완료'},
        {id:1, name: '계란', done:false, current:'구매완료'},
    ])
    const [inputText, setInputText] = useState('')
    // 물건 추가
    const addProduct = () => {
        let itemCopy = [...item]
        itemCopy.unshift({id:item.length, name: inputText, done:false, current:'구매완료' })
        setItem(itemCopy)
        console.log(itemCopy)

        setInputText('')
    }

    // 물건 삭제
    const delProduct = (index) => {
        let itemCopy = [...item]
        itemCopy.splice(index,1)
        setItem(itemCopy)
    }

    // 구매완료시 물건 취소선, 구매완료버튼 취소버튼으로 변경
    const purchase = (index) => {
        let itemCopy = [...item]
        itemCopy[index].done === false ? itemCopy[index].done = true : itemCopy[index].done = false
        itemCopy[index].current === '구매완료' ? itemCopy[index].current = '취소' : itemCopy[index].current = '구매완료'
        console.log(itemCopy)
        setItem(itemCopy)
    }
    return(
        <>
            <h2>🛒쇼핑 리스트</h2>
            <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="물건 이름 입력" />
            <button type="button" onClick={addProduct}>추가</button>

            <div className="product">
                {item.map((item, index) => (
                    <p key={index} style={{textDecoration:item.done === false ? "none" : "line-through"}}>{item.name}
                        <button type="button" onClick={() => purchase(index)}>{item.current}</button>
                        <button type="button" onClick={() => delProduct(index)}>삭제</button>
                    </p>
                ))}
            </div>
        </>
    )
}
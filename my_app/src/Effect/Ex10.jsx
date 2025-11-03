import { useEffect, useState } from "react";

export default function Ex10(){
    const users = [
        {id:1, name:'Alice', email:'alice@example.com'},
        {id:2, name:'Bob', email:'bob@example.com'},
        {id:3, name:'Charlie', email:'charlie@example.com'},
        {id:4, name:'David', email:'david@example.com'},
    ]
    // 검색 상태 변수
    const [text, setText] = useState('')
    // filter한 목록을 담아주는 상태 변수
    // 배열이름.filter((요소, 인덱스, 원본배열) => {return 조건})
    // 조건 만족 -> 만족하는 데이터 추출 후 새로운 배열로 반환
    // 조건 만족x -> 만족하지 않으면 빈배열 반환
    const [filterList, setFilterList] = useState([])

    const inputText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        // 검색어가 없으면 전체 사용자가 표시
        // 글자가 입력되있으면 공백이 없는거 (true)
        // 글자가 입력되어있지 않으면 false
        if(!text.trim()){ // !text.trim() === false
            setFilterList(users)
            return;
        }  
        // filter
        // const ResultFilter = users.filter((user) => {user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()); user.email.toLocaleLowerCase().includes(text.toLocaleLowerCase()); })
        const ResultFilter = 
        users.filter((user) => user.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) ||
        users.filter((user) => user.email.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setFilterList(ResultFilter);
    }, [text])

    return(
        <>
            <h2>간단 사용자 검색</h2>
            <input type="text" value={text} onChange={inputText} placeholder="이름 또는 이메일 검색" />
            <ul>
                {filterList.map((users) => (
                    <li key={users.id}>{users.name}({users.email})</li>
                ))}
            </ul>
            {/* 검색 결과가 존재하지 않을때 출력문 */}
            {filterList.length === 0 && <p>검색 결과가 존재하지 않습니다.</p> }
        </>
    )
}
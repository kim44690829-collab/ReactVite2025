import { useState } from "react";

export default function Blog(){
    const [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
    const [likes, setLikes] = useState([0,0,0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState(0);
    const [inputValue, setInputValue] = useState('');

    return(
        <>
            <p>{posts} <button onClick={'?????'}>👍{likes}</button></p>
            <p>11월 1일 발생</p>
            <button type="button">삭제</button>
        </>
    )
}
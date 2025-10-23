import { useState } from 'react'
import './CommentBoard.css'

export default function CommentBoard(){
    const [input, setInput] = useState('')
    const [comments, setComments] = useState([
        {id:0, text:'리액트 재밌어요!', like:0},
        {id:1, text:'useState 너무 신기해요', like:0},
    ])
    // 추가
    const addText = () => {
        let commentsCopy = [...comments]
        commentsCopy.unshift({id:comments.length, text:input, like:0 })
        setComments(commentsCopy)
        console.log(commentsCopy)
        setInput('')
    }
    // 삭제
    const delText = (index) => {
        let commentsCopy = [...comments]
        commentsCopy.splice(index,1)
        setComments(commentsCopy)
    }
    // 좋아요 증가
    const plusLike = (index) => {
        let commentsCopy = [...comments]
        commentsCopy[index].like += 1
        setComments(commentsCopy)
    }
    return(
        <>  
            <CommentItem list = {comments} inputText = {input} setInputText = {setInput} add = {addText} del = {delText} likePlus = {plusLike} />
        </>
    )
}

function CommentItem(props){
    // const [input, setInput] = useState('')
    return(
        <>
            <h2>🗨 댓글 게시판</h2>
            <input type='text' onChange={(e) => props.setInputText(e.target.value)} value={props.inputText} placeholder='댓글 입력'/>
            <button type='button' onClick={props.add}>등록</button>
            {props.list.map((commentsList, index) => (
                <p key={commentsList.id}>{commentsList.text}
                    <button type='button' onClick={() => props.likePlus(index)} >👍</button> <span>{commentsList.like}</span>
                    <button type='button' onClick={() => props.del(index)}>삭제</button>
                </p>
            ))}
        </>
    )
}
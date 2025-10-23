import { useState } from 'react';
import'./MovieReview.css';

export default function MovieReview(){
    const [reviews, setReviews] = useState([
        {id:0, title:'인셉션', comment: '꿈속의 꿈! 최고였어요.', likes:0},
        {id:1, title:'인터스텔라', comment: '음악이 너무 웅장해요.', likes:0},
    ])
    const [inputText1, setInputText1] = useState('')
    const [inputText2, setInputText2] = useState('')
    // 로직
    const addMovie = () => {
        let copyReviews = [...reviews]
        // copyReviews.unshift({title:inputText1, comment:inputText2, likes:0})
        copyReviews.push({id:reviews.length, title:inputText1, comment:inputText2, likes:0})
        console.log(copyReviews)
        setReviews(copyReviews);

        setInputText1('')
        setInputText2('')
    }
    // 삭제
    const delMovie = (index) => {
        let copyReviews = [...reviews]
        copyReviews.splice(index,1)
        setReviews(copyReviews)
    }
    // 좋아요버튼
    const likeBtn = (index) => {
        let copyReviews = [...reviews]
        copyReviews[index].likes += 1
        setReviews(copyReviews)
    }

    return(
        <>
            <h2>🎬나의 영화 리뷰</h2>
            <div className='movieInput'>
                <input type='text' onChange={(e) => setInputText1(e.target.value)} value={inputText1} placeholder='영화제목'/>
                <input type='text' onChange={(e) => setInputText2(e.target.value)} value={inputText2} placeholder='한줄평'/>
                <div>
                    <button onClick={addMovie}>등록</button>
                </div>
            </div>
            <div className='assessment'>
                {reviews.map((name, index) => (
                    <div key={name.id}>
                        <h2>{name.title}</h2>
                        <p>{name.comment}</p>
                        <button type='button' onClick={() => likeBtn(index)}>👍</button><span>{name.likes}</span>
                        <div className='delBtn'>
                            <button type='button' onClick={() => delMovie(index)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
import { useState } from "react";
//  자식 컴포넌트 : MovieList , MovieModal
import MovieList from '../NewMovie/MovieList';
import MovieModal from '../NewMovie/MovieModal';

export default function NewMovie(){
    //  영화 제목, 리뷰 담는 변수
    const [movie, setMovie] = useState([]);
    // 오브젝트 배열을 생성할때 아래와 같이 작성하면 0번째 index에 빈 배열이 생성된 상태로 랜더가 되서 나옴
    // const [movie, setMovie] = useState([{}]);
    // 선택한 영화가 없으면 null
    const [selectMovie, setSelectMovie] = useState(null)
    // 영화 제목 담는 변수
    const [title, setTitle] = useState('')
    // 영화 리뷰 담는 변수
    const [review, setReview] = useState('')

    // 영화 제목과 영화 리뷰가 같이 저장되는 오브젝트 배열
    const addMovie = () => {
        // 제목이 비어있으면 return으로 종료
        if(title === '') return
        // movie를 얕은 복사
        let movieCopy = [...movie]
        // movie = [{}] 삽입
        // 오브젝트 = {key : value, key : value .....}
        // 오브젝트는 반드시 id로, movie.length -> 삭제 이슈
        // 삭제이슈 없이 작성하고 싶다 -> id:Date.now()
        movieCopy.push({id:movie.length, title:title, review:review})
        // useState는 반드시 업데이트를 통해 재 랜더링 해줘야함.
        setMovie(movieCopy);
        // 영화 제목과 리뷰의 input입력이 끝나면 자동으로 값 제거
        setTitle('')
        setReview('')
    }

    return(
        <>
            <div>
                <h2>영화 리뷰 관리 앱</h2>
                <input type="text" placeholder="영화 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="영화 리뷰" value={review} onChange={(e) => setReview(e.target.value)}/>
                <button type="button" onClick={addMovie}>추가</button>
                {/* 자식 컴포넌트 태그로 가져오기 */}
                {/* movie를 통한 배열, setSelectMovie */}
                <MovieList movie = {movie} onSelect = {setSelectMovie} />
                {/* 모달이 열리고 닫힘 selectMovie != null 이면 모달 출력, 아니면 null */}
                {/* react에서 null은 빈 값이 아닌 아무것도 랜더되지 않는 상태 */}
                {selectMovie != null ? <MovieModal selectMovie = {selectMovie} onClose = {() => setSelectMovie(null)} /> : null }
            </div>
        </>
    )
}
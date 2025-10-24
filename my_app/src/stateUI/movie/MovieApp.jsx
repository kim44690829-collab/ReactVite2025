import { useState } from "react";
import MovieList from '../movie/MovieList';
// import MovieItem from '../movie/MovieItem';
// import MovieModal from '../movie/MovieModal';

export default function MovieApp(){
    const [movie, setMovie] = useState([{}])
    const [movieInput,setMovieInput] = useState('')
    const [reviewInput, setReviewInput] = useState('')

    const addMovie = () => {
        let movieCopy = [...movie]
        movieCopy.push({id:movie.length, name:movieInput, comment:reviewInput})
        setMovie(movieCopy);
        console.log(movieCopy)
        setMovieInput('')
        setReviewInput('')
    }

    return(
        <>
            <div className="movieApp">
                <h1>영화 리뷰 관리 앱🎬</h1>
                <input type="text" onChange={(e) => setMovieInput(e.target.value)} value={movieInput} placeholder="영화 제목"/>
                <input type="text" onChange={(e) => setReviewInput(e.target.value)} value={reviewInput} placeholder="리뷰"/>
                <button onClick={addMovie}>추가</button>
            </div>
        </>
    )
}
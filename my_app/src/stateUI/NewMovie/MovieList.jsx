import MovieItem from "./MovieItem"

export default function MovieList(props){
    return(
        <>
            <ul>
                {/* li를 반복하기 위한 map() */}
                {props.movie.map((movie) => (
                    // <li>태그는 MovieItem에 그릴 예정
                    <MovieItem key = {movie.id} movie = {movie} onSelect = {props.onSelect} />
                ))}
            </ul>
        </>
    )
}
// MovieList 부모의 자식
// NewMovie의 손자
export default function MovieItem(props){
    return(
        <>
            <li>
                {/* MovieItem이 부모로부터 물려받은 데이터는 Movie, Movie 안의 title, review에 접근하기 위해서는 props.movie.title과 같이 적용해야함. */}
                {props.movie.title}
                <button type="button" onClick={() => props.onSelect(props.movie)}>상세보기</button>
            </li>
        </>
    )
}
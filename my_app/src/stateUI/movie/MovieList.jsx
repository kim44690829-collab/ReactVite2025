import { useState } from "react";
import MovieModal from "./MovieModal";
// // import MovieItem from "./MovieItem";

export default function MovieList(props){
    const [modalOpen, setModalOpen] = useState(false)
    return(
        <>
            {props.movie.map((item,index) => (
                <div key={index}>
                    <span>{item.name}</span><button onClick={props.open}>상세보기</button>
                    {modalOpen && <MovieModal close = {setModalOpen(false)} movieList = {item.name[index]} reviewList = {item.comment[index]} />}
                </div>
            ))}
        </>
    )
}
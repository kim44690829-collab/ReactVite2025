import { useState } from "react";

export default function MovieModal(props){
    return(
        <>
            <div>
                <h2>{props.movieList}</h2>
                <p>{props.reviewList}</p>
                <button onClick = {props.close}>닫기</button>
            </div>
        </>
    )
}
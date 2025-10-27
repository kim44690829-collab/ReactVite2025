import { useState } from "react";
import MovieModal from "./MovieModal";

export default function MovieList(props){
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    return(
        <>
            {props.movie.map((item,index) => (
                <div key={item.id}>
                    <span>{item.name}</span><button onClick={() => {setModalOpen(true); setSelectedItem(item);}}>상세보기</button>
                    {modalOpen && selectedItem && selectedItem.id === item.id && (<MovieModal close = {() => setModalOpen(false)} movieList = {selectedItem.name} reviewList = {selectedItem.comment} />)}
                </div>
            ))}
        </>
    )
}
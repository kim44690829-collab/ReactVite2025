// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate03(){
    const [colorBtn,setColorBtn] = useState("tomato")

    return(
        <>
            <div style={{width:'300px', height:'300px', backgroundColor:colorBtn}}>
                <button onClick={() => {setColorBtn(colorBtn === "tomato" ? "skyblue" : "tomato")}}>색변경</button>
            </div>
        </>
    )
}
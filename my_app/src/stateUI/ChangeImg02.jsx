import { useState } from "react";

export default function ChangeImg02(){
    const [img, setImg] = useState(true)
    return(
        <>
            <div onMouseEnter={() => setImg(img ? false : true)}>
                {img ? <img src="/images/tree-4.jpg" alt="winter" /> : <img src="/images/tree-5.jpg" alt="sunset" /> }
            </div>
        </>
    )
}
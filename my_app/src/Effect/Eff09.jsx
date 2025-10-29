import { use, useEffect, useState } from "react";

export default function Eff09(){
    const [name,setName] = useState([]);
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setName(data))
    }, [])

    return(
        <div>
            <ul>
                {name.slice(0,5).map((name) => (
                    <li key={name.id}>{name.title}</li>
                ))}
            </ul> 
        </div>
    )
}
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <>
            <h2>여기는 Home page</h2>
            <Link to ='/about'>About 페이지로 이동</Link>
        </>
    )
}
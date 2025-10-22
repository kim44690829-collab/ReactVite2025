// useState import 안하면 사용 못함
import React,{useState} from "react";

export default function Exstate01(){
    // useState()를 담는 변수 생성
    // greeting = '안녕하세요'
    const [greeting, setGreeting] = useState("안녕하세요");
    // greeting로 비교한 후 -> 비교 결과를 setGreeting()
    // setGreeting(연산 혹은 비교 작업)

    return(
        <>
            <p>{greeting}</p>
            <button onClick={() => {
                // setGreeting으로 변경되는 부분
                // greeting === "안녕하세요" ? setGreeting("Hello") : setGreeting("안녕하세요")
                setGreeting(greeting === "안녕하세요" ? "Hello" : "안녕하세요")
            }}>toggle</button>
        </>
    )
}
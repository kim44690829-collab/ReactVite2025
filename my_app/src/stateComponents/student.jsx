import { useState } from "react"

export default function ScoreManager(){
    const [student, setStudent] = useState([
        {id: 1, name:'김철수', score:85},
        {id: 2, name:'이영희', score:92},
        {id: 3, name:'박민수', score:78},
    ])

    return(
        <>
            <StudentCard studentList = {student} />
        </>
    )
}

function StudentCard(props){
    return(
        <>
            <h1>학생 점수 관리 시스템</h1>
            {props.studentList.map((list, index) => (
                <div>
                    <h3>{list.name}</h3>
                    <p>점수 : {list.score}</p>
                    <button type="button">+10점</button>
                </div>
            ))}
        </>
    )
}
import { useEffect, useState } from "react";

export default function Ex11(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const ageChange = (e) => {
        setAge(e.target.value)
    }

    useEffect(() => {
        if(name.trim()){
            console.log('이름이 변경되었습니다.')
        }
    },[name])
    useEffect(() => {
        if(age !== 0){
            console.log('나이가 변경되었습니다.')
        }
    },[age])


    return(
        <>
            <input type="text" value={name} onChange={nameChange} placeholder="이름을 입력해주세요" />
            <input type="number" value={age} onChange={ageChange} placeholder="나이를 입력해주세요"/>
            <p>이름 : {name}, 나이 : {age}</p>
        </>
    )
}
import { useState, useEffect } from "react";

export default function useProduct(){
    const [food, setFood] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
        .then((res) => {
            if(!res.ok){
                throw new Error(`에러 : ${res.status}`)
            }
            return res.json()
        })
        .then((data) => {
            setFood(data.recipes)
            console.log('여기', data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => {
            console.log('요청 완료')
        })
    },[])
    return food;
}
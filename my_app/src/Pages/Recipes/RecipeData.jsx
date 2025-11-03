import { useState, useEffect } from "react";

export default function useRecipe(){
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
        .then((res) => {
            if(!res.ok){
                throw new Error(`에러 : ${res.status}`)
            }
            return res.json()
        })
        .then((data) => {
            setRecipe(data.recipes)
            console.log('받아온 데이터', data.recipes)
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => {
            console.log('요청 완료')
        })
    },[])
    return recipe;
}
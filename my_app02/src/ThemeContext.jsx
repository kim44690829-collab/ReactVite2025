// createContext => 데이터 공용 저장장소 생성
import { useState, createContext } from "react";

// 1. 데이터 저장소 context 생성
// 내가 만든 저장소는 내보내기 해야함 -> export 해야함
export const ThemeContext = createContext();

// 2. provider 컴포넌트를 정의
export default function ThemeProvider({children}){

    // 전역변수 지정
    // toggle 버튼 ->  (false => true , true => false)
    // 토글버튼을 숨김 / 보임 상태를 저장하는 상태변수
    const [theme, setTheme] = useState(false)

    // 토글 함수(업데이트하는 함수)
    // prev => 이전의 값이라는 의미의 약어
    // prev = false => true 된 상태를 정확히 알려준다.
    const toggleTheme = () => {
        // setTheme(!theme)
        setTheme((prev) => !prev)
        // 위의 ((prev) => !prev) 를 리액트는
        // function toggleTheme(prev){
        //     setTheme(!prev)
        // }
        // 라고 받아들여 더 정확하게 받아들임
    }

    // 공유할 데이터 : 값, 함수 모두 가능
    return(
        // 내가 만든 데이터 저장소 이름.provider
        // ThemeContext.provider value={{}}로 값을 공유한다.
        // 공유해야되는 데이터 : {theme, toggleTheme}
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

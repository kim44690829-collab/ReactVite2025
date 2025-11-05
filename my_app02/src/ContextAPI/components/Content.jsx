import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Content(){
    const {theme} = useContext(ThemeContext);

    return(
        <main className={`content ${theme ? 'dark' : 'light'}`}>
            <p>
                현재 테마는 <strong>{theme? 'dark' : 'light'}</strong>모드 입니다.
            </p>
            <p>Context API와 useContext 훅으로 전역상태를 관리하고 있어요</p>
        </main>
    )
}
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}){
    const [user, setUser] = useState(false)
    const [userLogin, setUserLogin] = useState(false)
    const [loginSee, setLoginSee] = useState(false)
    const [userName, setUserName] = useState('')

    const login = () => {
        setUserLogin(true)
    }
    const loginBtn = () => {
        // setUserLogin((prev) => !prev)
        // userProfile((prev) => !prev)
        setUser((prev) => !prev)
        setUserLogin(false);
        setLoginSee(false)
    }
    const logout = () => {
        setUserLogin(false)
        setUserName('')
        setUser(false)
        
    }


    return(
        <AuthContext.Provider value={{user, userLogin, login, logout, userName, setUserName, loginBtn, loginSee}}>
            {children}
        </AuthContext.Provider>
    )
}
import { useState, createContext } from "react";

export const loginContext = createContext();

export default function LoginProvider({children}){
    const [user, setUser] = useState(null)

    const login = (userName) => {
        setUser(userName)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <loginContext.Provider value={{user, login, logout}}>
            {children}
        </loginContext.Provider>
    )
}
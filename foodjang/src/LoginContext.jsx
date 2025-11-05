import { useState, createContext } from "react";

export const loginContext = createContext();

export default function loginProvider({children}){
    const [user, setUser] = useState(null)

    const login = () => {
        setUser()
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
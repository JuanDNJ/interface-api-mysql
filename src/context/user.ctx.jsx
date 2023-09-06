import { createContext, useContext, useState, useCallback, useMemo} from "react";


const ctx = createContext(false)


export const UserContextProvider = ({children}) => {
    const [signin, setSignin] = useState(Boolean(globalThis.localStorage.getItem('token')))

    const toggleSignin = useCallback(() => {
        setSignin(() => Boolean(globalThis.localStorage.getItem('token')))
    }, [signin])
    
    const value = useMemo(() => ({
        signin,
        toggleSignin
    }),[signin,toggleSignin])

    return (
        <ctx.Provider value={value}>
            {children}
        </ctx.Provider>
    )
}

export const useUserContext = () => {
    return useContext(ctx)
}
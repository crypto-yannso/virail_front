import { createContext, ReactNode, useContext, useMemo, useState } from "react"

type AuthenticatedProvider = {
    children : ReactNode
}

type AuthenticatedContexType = {
    isAuthenticated: boolean,
    setIsAuthenticated: (update: boolean) => void,
}

export const AuthenticatedContext = createContext<AuthenticatedContexType>({ isAuthenticated: false, setIsAuthenticated: () => { } })

export const AuthenticatedProvider = ({children}: AuthenticatedProvider) => {

    const [isAuthenticated, setIsAuthenticated] = useState<AuthenticatedContexType['isAuthenticated']>(localStorage.getItem('isAuthenticated') ? true : false)


    const authenticatedContextValue = useMemo(
        () => ({
            isAuthenticated,
            setIsAuthenticated
        }),
        [isAuthenticated]
    )


    return(
        <AuthenticatedContext.Provider value={authenticatedContextValue}>
                    {children}
        </AuthenticatedContext.Provider>
    )
}

export const useAuthenticated = () => {
    const authenticatedContext = useContext(AuthenticatedContext)
    if (!authenticatedContext) {
        throw new Error('useAuthenticated must be used within an AuthProvider');
    }
    return authenticatedContext
}
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

 type AuthenticatedProvider= {
    children: ReactNode
 }


type AuthenticatedContexType = {
    isAuthenticated: boolean,
    setIsauthenticated: (isAuthenticated: boolean) => void,
}

 export const AuthenticatedContext = createContext<AuthenticatedContexType>({isAuthenticated: false, setIsauthenticated: () => {}}) ;

 export const AuthenticatedProvider = ({children}: AuthenticatedProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState<AuthenticatedContexType['isAuthenticated']>(localStorage.getItem('isAuthenticated') ? true : false);

    const authenticatedContextValue =  useMemo(
        () => ( {
            isAuthenticated, 
            setIsAuthenticated
        }),
        [isAuthenticated]
      
    )

    return (
        <AuthenticatedContext.Provider value={authenticatedContextValue}>
            {children}
        </AuthenticatedContext.Provider>
    )
}


export const  useAuthenticated = () => {
    const authenticatedContext = useContext(AuthenticatedContext);
    if (!authenticatedContext) {
        throw new Error('useAuthenticated must be used within a AuthenticatedProvider');
    }

}
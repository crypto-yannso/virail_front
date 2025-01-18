import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import {jwtDecode} from "jwt-decode";
import Cookies from 'js-cookie';

// Context to share user's informations with components
export type UserContextType = {
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    setEmail: (email: string) => void,
    is_staff: string | boolean,
    setIs_staff: (is_staff: boolean) => void
};

type UserProviderType = {
    children: ReactNode;
};

// Contexts
export const UserContext = createContext<UserContextType | null>({ email: null, setEmail: () => { }, firstName: null, lastName: null, is_staff: false , setIs_staff: () => {}});

// Get children components
export const UserProvider = ({ children }: UserProviderType) => {

    // user's states
    const [firstName, setFirstName] = useState<UserContextType['firstName']>(null);
    const [lastName, setLastName] = useState<UserContextType['lastName']>(null);
    const [email, setEmail] = useState<UserContextType['email']>(null);
    const [is_staff, setIs_staff] = useState<UserContextType['is_staff'] | boolean>(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        console.log('Récupération du token d\'accès...');
        const token = localStorage.getItem('access_token');
        console.log('Token :', token);
      
        if (token) {
          console.log('Token trouvé !');
          const decodedToken = jwtDecode(token);
          console.log('Decoded Token :', decodedToken);
      
          setFirstName(decodedToken.firstname);
          console.log('First Name :', decodedToken.firstname);
          setLastName(decodedToken.lastname);
          console.log('Last Name :', decodedToken.lastname);
          setEmail(decodedToken.email);
          console.log('Email :', decodedToken.email);
          setIs_staff(decodedToken.is_staff);
          console.log('Is Staff :', decodedToken.is_staff);
          setToken(token); // Ajoutez cette ligne pour stocker le token dans votre état
          console.log('Token stocké dans l\'état :', token);
        } else {
          console.log('Aucun token trouvé dans le local storage.');
        }
      }, []);
    // Share the values with components
    const userContextValue = useMemo(
        () => ({
            email,
            setEmail,
            firstName,
            lastName,
            is_staff,
            setIs_staff
        }),
        [email, firstName, lastName, is_staff]
    );

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};

// Hook may be used to access the user's informations
export const userDatas = () => {
    const Usercontext = useContext(UserContext);
    if (!Usercontext) {
        throw new Error('userDatas must be used within an AuthProvider');
    }
    return Usercontext
}

export default UserProvider;